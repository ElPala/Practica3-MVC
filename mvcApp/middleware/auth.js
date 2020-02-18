const auth = async(req, res, next) => {
    try {
        let {id}=req.params
        if (typeof id === 'undefined') {
            throw { errorType: 'Unauthorized', code: 401, message: 'No tienes permisos para ver estos recursos' };
        }
        console.log(id)
        next()
    } catch (error) {
        let code = 500;
        if (error.code) code = error.code
        res.status(code);
        res.send(error);
    }
}

module.exports = auth