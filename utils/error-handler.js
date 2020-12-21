module.exports = errorHandler;

async function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }
    console.log('---> errr', err.message);
    return res.status(500).json({ message: err.message });
}