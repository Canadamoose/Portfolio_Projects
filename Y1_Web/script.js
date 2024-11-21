const books = [
    {
        title: "Baptism of Fire",
        author: "Andrzej Sapkowski",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam lacus. Eget mi proin sed libero enim sed faucibus turpis. Quis commodo odio aenean sed. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Viverra adipiscing at in tellus integer feugiat. Euismod elementum nisi quis eleifend. Mauris a diam maecenas sed. Sed euismod nisi porta lorem mollis aliquam ut. Ultrices eros in cursus turpis massa tincidunt dui. Orci dapibus ultrices in iaculis nunc sed. Urna id volutpat lacus laoreet.Sapien faucibus et molestie ac feugiat sed lectus. Vivamus at augue eget arcu dictum. Eget nunc lobortis mattis aliquam faucibus purus in. Cursus vitae congue mauris rhoncus aenean. Vitae ultricies leo integer malesuada nunc. Varius morbi enim nunc faucibus a pellentesque sit amet. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Morbi leo urna molestie at. Eu facilisis sed odio morbi quis commodo odio aenean sed. Enim praesent elementum facilisis leo.",
    },

    {
        title: "A Song of Ice and Fire",
        author: "George R.R Martin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam lacus. Eget mi proin sed libero enim sed faucibus turpis. Quis commodo odio aenean sed. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Viverra adipiscing at in tellus integer feugiat. Euismod elementum nisi quis eleifend. Mauris a diam maecenas sed. Sed euismod nisi porta lorem mollis aliquam ut. Ultrices eros in cursus turpis massa tincidunt dui. Orci dapibus ultrices in iaculis nunc sed. Urna id volutpat lacus laoreet.Sapien faucibus et molestie ac feugiat sed lectus. Vivamus at augue eget arcu dictum. Eget nunc lobortis mattis aliquam faucibus purus in. Cursus vitae congue mauris rhoncus aenean. Vitae ultricies leo integer malesuada nunc. Varius morbi enim nunc faucibus a pellentesque sit amet. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Morbi leo urna molestie at. Eu facilisis sed odio morbi quis commodo odio aenean sed. Enim praesent elementum facilisis leo."
    },

    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam lacus. Eget mi proin sed libero enim sed faucibus turpis. Quis commodo odio aenean sed. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Viverra adipiscing at in tellus integer feugiat. Euismod elementum nisi quis eleifend. Mauris a diam maecenas sed. Sed euismod nisi porta lorem mollis aliquam ut. Ultrices eros in cursus turpis massa tincidunt dui. Orci dapibus ultrices in iaculis nunc sed. Urna id volutpat lacus laoreet.Sapien faucibus et molestie ac feugiat sed lectus. Vivamus at augue eget arcu dictum. Eget nunc lobortis mattis aliquam faucibus purus in. Cursus vitae congue mauris rhoncus aenean. Vitae ultricies leo integer malesuada nunc. Varius morbi enim nunc faucibus a pellentesque sit amet. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Morbi leo urna molestie at. Eu facilisis sed odio morbi quis commodo odio aenean sed. Enim praesent elementum facilisis leo."
    },

    {
        title: "Dune",
        author: "Frank Herbert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Platea dictumst quisque sagittis purus sit amet volutpat. Et malesuada fames ac turpis egestas integer. Amet massa vitae tortor condimentum lacinia. Sed viverra tellus in hac habitasse. Elit pellentesque habitant morbi tristique. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lobortis scelerisque fermentum dui faucibus in. Etiam non quam lacus suspendisse faucibus interdum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dignissim enim sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id venenatis a condimentum. Eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim ut sem. Sit amet risus nullam eget.",
    },

    {
        title: "1984",
        author: "George Orwell",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Platea dictumst quisque sagittis purus sit amet volutpat. Et malesuada fames ac turpis egestas integer. Amet massa vitae tortor condimentum lacinia. Sed viverra tellus in hac habitasse. Elit pellentesque habitant morbi tristique. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lobortis scelerisque fermentum dui faucibus in. Etiam non quam lacus suspendisse faucibus interdum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dignissim enim sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id venenatis a condimentum. Eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim ut sem. Sit amet risus nullam eget.",
    },

    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Platea dictumst quisque sagittis purus sit amet volutpat. Et malesuada fames ac turpis egestas integer. Amet massa vitae tortor condimentum lacinia. Sed viverra tellus in hac habitasse. Elit pellentesque habitant morbi tristique. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lobortis scelerisque fermentum dui faucibus in. Etiam non quam lacus suspendisse faucibus interdum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dignissim enim sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id venenatis a condimentum. Eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim ut sem. Sit amet risus nullam eget.",
    },

    {
        title: "Meditations",
        author: "Marcus Aurelius",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Platea dictumst quisque sagittis purus sit amet volutpat. Et malesuada fames ac turpis egestas integer. Amet massa vitae tortor condimentum lacinia. Sed viverra tellus in hac habitasse. Elit pellentesque habitant morbi tristique. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lobortis scelerisque fermentum dui faucibus in. Etiam non quam lacus suspendisse faucibus interdum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dignissim enim sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id venenatis a condimentum. Eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim ut sem. Sit amet risus nullam eget.",
    },

    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Platea dictumst quisque sagittis purus sit amet volutpat. Et malesuada fames ac turpis egestas integer. Amet massa vitae tortor condimentum lacinia. Sed viverra tellus in hac habitasse. Elit pellentesque habitant morbi tristique. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lobortis scelerisque fermentum dui faucibus in. Etiam non quam lacus suspendisse faucibus interdum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dignissim enim sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id venenatis a condimentum. Eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim ut sem. Sit amet risus nullam eget.",
    },

    {
        title: "I Am Malala",
        author: "Malala Yousafzai",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam. Platea dictumst quisque sagittis purus sit amet volutpat. Et malesuada fames ac turpis egestas integer. Amet massa vitae tortor condimentum lacinia. Sed viverra tellus in hac habitasse. Elit pellentesque habitant morbi tristique. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lobortis scelerisque fermentum dui faucibus in. Etiam non quam lacus suspendisse faucibus interdum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dignissim enim sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id venenatis a condimentum. Eu facilisis sed odio morbi quis commodo. Mauris a diam maecenas sed enim ut sem. Sit amet risus nullam eget.",
    },
];


// Attach event listeners to buttons
const detailsButtons = document.querySelectorAll(".book-button");
detailsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get book title from the clicked object
    const bookTitle = event.target.parentElement.querySelector(".book-title").textContent;

    // Go to book details page and bring the book title in the url
    window.location.href = `book-details.html?title=${encodeURIComponent(bookTitle)}`;
  });
});
// Get book title from the url
const urlParams = new URLSearchParams(window.location.search);
const bookTitle = urlParams.get("title");

// match title to arrayed books
const book = books.find((b) => b.title === bookTitle);

// Populate the placeholders with book details
document.getElementById("book-title").textContent = book.title;
document.getElementById("book-author").textContent = book.author;
document.getElementById("book-description").textContent = book.description;