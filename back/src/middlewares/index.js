const validateBookData = (req, res, next) => {
    const {title, year, author, state} = req.body
    if(!title || !year || !author || !state){
        res.status(400).json({
            message: "Falta informacion para poder crear la movie",
        })
    } else {
        next();
    }
}

const logSoliInfo = (req, res, next) => {

    console.log(req.method, req.path)
    next()
}

module.exports = {
    validateBookData,
    logSoliInfo
};

