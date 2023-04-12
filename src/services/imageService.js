const axios = require('axios');
// const Replicate = require('replicate');

module.exports = {
    getImageUrl: async (res) => {
        try {
            const axiosResponse = await axios.post('https://api.replicate.com/v1/predictions', {
                "version": "25d2f75ecda0c0bed34c806b7b70319a53a1bccad3ade1a7496524f013f48983",
                "input": {"prompt": "frog portrait wear white coat and black headphone and 3D-glasses, #pixel"}
            }, {
                headers: {
                    Authorization: `Token e80e4cb2a5e55d7b8b3b776f9010640c9ce28042`,
                },
            });

            // let imageUrl;
            const urlImage = setTimeout(async () => {
                const imageUrl = await axios.get(`${axiosResponse.data.urls.get}`, {
                    headers: {
                        Authorization: `Token e80e4cb2a5e55d7b8b3b776f9010640c9ce28042`,
                    },
                });
                // const myImage = imageUrl.data.output;
                console.log(imageUrl.data.output, '+++++++++++++++++++++++++++++');
                // if (myImage) {
                    return await imageUrl.data.output;
                // }
            }, "5000");

            // console.log(imageUrl, 'OBJECT');
            // if (imageUrl.data.output) {
            return res.json(urlImage);
            // }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
};
