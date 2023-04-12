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
                    Authorization: `Token 9191fff78bd25094f79046e4c8cdf7b814f17805`,
                },
            });

            function myAsyncFunction() {
                return new Promise((resolve, reject) => {
                    const urlImage = setTimeout(async () => {
                        try {
                            const imageUrl = await axios.get(`${axiosResponse.data.urls.get}`, {
                                headers: {
                                    Authorization: `Token 9191fff78bd25094f79046e4c8cdf7b814f17805`,
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
