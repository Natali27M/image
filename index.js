const express = require('express');
const cors = require('cors');

const {imageRouter} = require('./src/router');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/image', imageRouter);

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.listen(9090, () => {
    console.log(`Started on port 9090`);
    // console.log(`Started on port ${constants.PORT}`);
});
