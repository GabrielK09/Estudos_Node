const crypto = require('crypto')

exports.cryptoPassword = (req, res) => {
    const { text } = req.body
    const hash = crypto.createHash('md5').update(text).digest('hex');
    res.status(200).json({
        status: 'true',
        data: hash
    });
};