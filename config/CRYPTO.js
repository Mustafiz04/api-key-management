'use strict'

const {
  RSA_PUBLIC_KEY = '',
  IS_ENCRYPTION = 'true'
} = process.env

const REQUIRED_CONFIG = [
  'RSA_PUBLIC_KEY',
]

REQUIRED_CONFIG.forEach(key => {
  if (!process.env[key]) {
    console.error('[Error] Missing CRYPTO Config:', key)
    return process.exit(1)
  }
})

const CRYPTO_CONFIG = {
  RSA_PUBLIC_KEY,
  IS_ENCRYPTION: IS_ENCRYPTION === 'true'
}

export default CRYPTO_CONFIG