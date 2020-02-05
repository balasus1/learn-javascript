let myBook = {
    ean: '123243fajhal3',
    title: 'Lord of the Rings',
    author: 'J.R.R Tolkein',
    pubYear: 1968,
    genre: 'Fantasy',
    country: 'United Kingdom'
}

let otherBook = {
    ean: '923243fajha24',
    title: 'The Hobit',
    author: 'J.R.R Tolkein',
    pubYear: 1971,
    genre: 'Fantasy',
    country: 'United Kingdom'
}

// create function to print author and then year
let getSummary = function(book) {
    return (
        {
            summary:`${book.title} is written by the author ${book.author}`,
            publisedOn: `${book.title} is published on ${book.pubYear}`
        }
    )
}
let bookAuth = getSummary(myBook)
let otherBookPubedOn = getSummary(otherBook)
console.log(bookAuth.summary)
console.log(bookAuth.publisedOn)
console.log(otherBookPubedOn.summary)
console.log(otherBookPubedOn.publisedOn)
// temperature calc