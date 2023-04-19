const axios = require('axios');

module.exports = {
    getImageUrl: async (text) => {
        try {
            const axiosResponse = await axios.post('https://api.replicate.com/v1/predictions', {
                "version": "25d2f75ecda0c0bed34c806b7b70319a53a1bccad3ade1a7496524f013f48983",
                "input": {"prompt": `${text}`}
                // "input": {"prompt": "frog portrait wear white coat and black headphone and 3D-glasses, #pixel"}
            }, {
                headers: {
                    Authorization: `Token 8b158bf8c25a7798ea87cee7f47f80df6ffa99bb`,
                },
            });

            function myAsyncFunction() {
                return new Promise((resolve, reject) => {
                    const urlImage = setTimeout(async () => {
                        try {
                            const imageUrl = await axios.get(`${axiosResponse.data.urls.get}`, {
                                headers: {
                                    Authorization: `Token 8b158bf8c25a7798ea87cee7f47f80df6ffa99bb`,
                                },
                            });
                            resolve(imageUrl.data.output);
                        } catch (error) {
                            reject(error);
                        }
                    }, 5000);
                });
            }

            return myAsyncFunction().then(outputValue => outputValue)
        } catch (e) {
            console.log(e);
            return e;
        }
    }
};
