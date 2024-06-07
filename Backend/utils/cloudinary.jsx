const cloudinary = require('cloudinary').v2
import config from '../config'
const cloud_name =config.cloud_name
const api_key =config.api_key
const api_secret_key =config.api_secret


cloudinary.config({
    cloud_name:cloud_name,
    api_key:api_key,
    api_secret_key:api_secret_key
})


module.exports = cloudinary