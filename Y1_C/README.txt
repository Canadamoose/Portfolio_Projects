This project is a very simple book storage program, with the ability to save and load books from a file, as well as delete and add books.


To run the program it muct be first compiled with "gcc -o main.exe main.c book.c book.h"

Then use "main.exe" to run


When the program starts it will read the books.dat file and load any books into memory

use 1/2/3/4/5 to select the desired option, option 5 also saves the books to a books.dat file

Add Book  will request a Title, Author, ISBN, and year from the user which will save the information in memory

Delete Book will request the ISBN of the book you wish to delete and it will then remove the book from memory

Search Book will request a word to search for, unfortunately it only searches for the last letter of the title author or isbn

List Books will list all books in the memory

Exit will save all books that are in the memory and write them to the books.dat file, overwriting the entire file.