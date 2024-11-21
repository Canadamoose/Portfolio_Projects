const url = new URL('http://localhost:3000');

//Call the function to fetch data from server
var data = getData();

//fetch the info from the server
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    //these didn't need to be decalared out here, I'm not 100% sure why I did this
    var bookInStock;
    var purchaseButton;

    if (data.length > 0){
        //make sure the element is empty
        var bookCard = '';
        data.forEach((bookData) => {
            //make purchase buttons if the books are available
            //give a better response to book availability
            if (bookData.Available === "TRUE") {
                bookInStock = 'Yes';
                purchaseButton = `<button id=${bookData.BookID}>Purchase</button>`;
            } else {
                bookInStock = 'No';
                purchaseButton = '';
            }
            
            //populate my book cards with elements and data from the API
            bookCard += `<div>
                        <img src=./images/${bookData.ImageFileName} alt=The cover for ${bookData.Title}>
                        <h2>Title: ${bookData.Title}</h2>
                        <p>Author: ${bookData.Author}</p>
                        <p>Price: $${bookData.Price}</p>
                        <p>Available: ${bookInStock}</p>
                        ${purchaseButton}
                        </div>`;
        });
        document.getElementById('book-card').innerHTML = bookCard;
    }

};
