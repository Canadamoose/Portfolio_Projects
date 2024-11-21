To actually use this you need to run the command "node app.js" in the main directory of the files. If for whatever reason it won't work without the modules being installed for each individual machine, I used "cors", "express", "csv-parser", and "fs".

When the "app.js" server is running you can now open the "index.html" file.

The webpage is very simple and doesn't do much, it fetches data from a CSV file, parses it into JSON, which is then used to build the book cards on the webpage. The purchase buttons are currently non-functional, I was going to add event listeners to the buttons that change the book availability to false, to simulate a purchase being made, as well as setting an interval to the fetching to keep refreshing the data.