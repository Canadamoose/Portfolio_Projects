//Imports to make the server run
const app = require('express')();
const PORT = 3000;
const csv = require('csv-parser');
const fs = require('fs');
const parsedCSV = [];
const cors = require('cors');
app.use(cors());

//Listen for things
app.listen(PORT, () => {
    console.log('Listening on port 3000...');
});

//turn CSV data into fetchable JSONable text
fs.createReadStream('booksdata.csv')
    .pipe(csv())
    .on('data', (data) => {parsedCSV.push(data)})
    .on('end', () => {
        app.get('/', (req, res) => {
            res.send(parsedCSV);
        });
    });