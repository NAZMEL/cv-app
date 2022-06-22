const apiErrorHandler = require("./../helpers/error-handler");

const getMainPage = (req, res) =>{
    res.status(200).json({
        message: 'hello'
    })
    
}

module.exports = {
    getMainPage,
}