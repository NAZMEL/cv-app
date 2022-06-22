const apiErrorHandler = (res, error) =>{
    console.log(error);
    res.status(500).send(error.message);
}

module.exports = apiErrorHandler;