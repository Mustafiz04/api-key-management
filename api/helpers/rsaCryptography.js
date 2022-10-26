
import { readFileSync } from 'fs';
import path from 'path';
import { CRYPTO_CONFIG } from './../../config'
const { IS_ENCRYPTION, RSA_PUBLIC_KEY} = CRYPTO_CONFIG

const crypto = require('crypto')
const CryptoJS = require("crypto-js");


export class RsaCryptographyUtil {
    static publicKey;

    static getRsaPublicKey() {
        if (RsaCryptographyUtil.publicKey)
            return RsaCryptographyUtil.publicKey;
        RsaCryptographyUtil.publicKey = RSA_PUBLIC_KEY
        return RsaCryptographyUtil.publicKey;
    }

    static encrypt(data) {
        // if(!IS_ENCRYPTION) {
        //     return data
        // }
        try {
            let pKey = RsaCryptographyUtil.getRsaPublicKey();
            const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), pKey).toString();
            return ciphertext
        } catch(error){
            throw error
        }
    }

    static decrypt(data) {
        // if(!IS_ENCRYPTION) {
        //     return data
        // }
        try{
            let pKey = RsaCryptographyUtil.getRsaPublicKey();
            const bytes = CryptoJS.AES.decrypt(data, pKey);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData
        }catch(error){
            throw error
        }
    }
}