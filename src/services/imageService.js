const axios = require('axios');
// import { parseFile } from 'music-metadata';
// import { inspect } from 'util';

const { Configuration, OpenAIApi } = require("openai");

module.exports = {
    // getText: async () => {
    //     const configuration = new Configuration({
    //         apiKey: "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",
    //         // apiKey: "YOUR_OPENAI_API_KEY",
    //     });
    //     const openai = new OpenAIApi(configuration);
    //
    //     async function transcribeAudio(filename) {
    //         const transcript = await openai.createTranscription(
    //             fs.createReadStream(filename),
    //             "whisper-1"
    //         );
    //         // console.log(transcript.data.text,'-----------------------');
    //         return transcript.data.text;
    //     }
    // },

    getImageUrl: async (text) => {
        try {
            const axiosResponse = await axios.post('https://api.replicate.com/v1/predictions', {
                "version": "25d2f75ecda0c0bed34c806b7b70319a53a1bccad3ade1a7496524f013f48983",
                "input": {"prompt": `${text}`}
                // "input": {"prompt": "frog portrait wear white coat and black headphone and 3D-glasses, #pixel"}
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
                // return {image: imageUrl.data.output};
                // if (myImage) {
                //     return res.json(imageUrl.data.output);
                // }
            }, "5000");

            console.log(urlImage, 'OBJECT');
            // if (imageUrl.data.output) {
            // return res.json(urlImage);
            // }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
};
