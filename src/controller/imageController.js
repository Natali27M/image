const {imageService} = require('../services');

module.exports = {
    getImageUrl: async (req, res, next) => {
        const imageUrl = await imageService.getImageUrl();
        return res.json(imageUrl);
    }
};

