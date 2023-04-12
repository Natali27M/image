const {imageService} = require('../services');

module.exports = {
    getImageUrl: async (req, res, next) => {
        const imageUrl = await imageService.getImageUrl(req.body.transcript);
        console.log(imageUrl,'111111111111111111111111111111111');
        return res.json({imageUrl});
    }
};

