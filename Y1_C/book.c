#include "book.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
//declare my array pointer and length variable
FILE *file;
Book *bookArray = NULL;
int length = 0;

void addBook()
{
    //realloc to always have enough memory to add more books
    bookArray = realloc(bookArray, length * sizeof(Book) + 1);
    printf("Enter book title: ");
    fgets(bookArray[length].title, 256, stdin);
    printf("Enter book author: ");
    fgets(bookArray[length].author, 100, stdin);
    printf("Enter book ISBN: ");
    fgets(bookArray[length].isbn, 13, stdin);
    printf("Enter book year: ");
    scanf("%d", &bookArray[length].year);
    getchar();
    //Book added
    length++;
};

void deleteBook()
{
    //Semi stolen from last semesters java program
    //deletes a book based on the ISBN
    char isbn[13];
    printf("Enter book ISBN: ");
    fgets(isbn, 13, stdin);

    for (int i = 0; i < length; i++)
    {
        if (strcmp(bookArray[i].isbn, isbn) == 0)
        {
            for (int j = i; j < length - 1; j++)
            {
                bookArray[j] = bookArray[j + 1];
            }
            length--;
            printf("\nBook deleted\n");
            return;
        }
    }
    printf("\nBook not found\n");
};

//This was one of the last ones I did and had to check teams vods to get it right
//Searches for a book but only works on the last letter or something
void searchBook()
{
    char searchWord[256];
    printf("Enter search word: ");
    fgets(searchWord, 256, stdin);

    for (int i = 0; i < length; i++)
    {
        if (strstr(bookArray[i].title, searchWord) || strstr(bookArray[i].author, searchWord) || strstr(bookArray[i].isbn, searchWord))
        {
        printf("\nTitle: %sAuthor: %sISBN: %sYear: %d\n", bookArray[i].title, bookArray[i].author, bookArray[i].isbn, bookArray[i].year);
        }
    }
};

//prints out all books in the array
void listBooks()
{
    for (int i = 0; i < length; i++) 
    {
        printf("\nTitle: %sAuthor: %sISBN: %sYear: %d\n", bookArray[i].title, bookArray[i].author, bookArray[i].isbn, bookArray[i].year);
    }
};

//writes the books and a length variable into a .dat file
void saveBooks()
{
    file = fopen("books.dat", "wb");
    if (file != NULL)
    {
        fwrite(&length, sizeof(int), 1, file);
        
        for (int i = 0; i < length; i++)
        {
            fwrite(&bookArray[i], sizeof(Book), 1, file);
        }
        fclose(file);
    }
};

//loads the length variable and allocates memory to the array
void loadBooks()
{
    file = fopen("books.dat", "rb");
    if (file != NULL)
    {
        fread(&length, sizeof(int), 1, file);
        if (length == 0)
        {
            bookArray = malloc(sizeof(Book));
        }
        else
        {
            bookArray = malloc(length * sizeof(Book));
        };
        fread(bookArray, sizeof(Book), length, file);
        fclose(file);
    }
};