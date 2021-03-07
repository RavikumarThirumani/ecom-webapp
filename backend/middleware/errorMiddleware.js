// For error handling, when to test the API's

const notFound = (req,res,next) =>{
    const error = new Error(`Not found- ${req.originalUrl}`)
    res.status(404)
    next(error)
}

// For error handling, when to test the API's

const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode === 200 ? 500 :res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

export { notFound, errorHandler }