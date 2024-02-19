let books = [
    { title: "The White Tiger", author: "aravind Adiga", Year: 2008 },
    { title: "The Lowland", author: "jhumpa Lahiri", Year: 2013 },
    { title: "The Ministry of Utmost Happiness", author: "arundhati Roy", Year: 2017 },
    { title: "The Girl in Room 105", author: "chetan Bhagat", Year: 2018 },
    { title: "Half Girlfriend", author: "chetan Bhagat", Year: 2014 },
    { title: "The Immortals of Meluha", author: "amish Tripathi", Year: 2010 },
    { title: "The Secret of the Nagas", author: "amish Tripathi", Year: 2011 },
    { title: "The Oath of the Vayuputras", author: "amish Tripathi", Year: 2013 },
    { title: "Scion of Ikshvaku", author: "amish Tripathi", Year: 2015 },
    { title: "Sita: Warrior of Mithila", author: "amish Tripathi", Year: 2017 },
    { title: "Raavan: Enemy of Aryavarta", author: "amish Tripathi", Year: 2019 },
    { title: "The Krishna Key", author: "ashwin Sanghi", Year: 2012 },
    { title: "The Rozabal Line", author: "ashwin Sanghi", Year: 2007 },
    { title: "Chanakya's Chant", author: "ashwin Sanghi", Year: 2010 },
    { title: "The Sialkot Saga", author: "ashwin Sanghi", Year: 2016 },
    { title: "Keepers of the Kalachakra", author: "ashwin Sanghi", Year: 2018 },
    { title: "The Palace of Illusions", author: "chitra Banerjee Divakaruni", Year: 2008 },
    { title: "One Indian Girl", author: "chetan Bhagat", Year: 2016 },
    { title: "The Great Indian Novel", author: "shashi Tharoor", Year: 1989 }
];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function FilterFunction(books) {
    return books.filter(book => book.Year >= 2010).map(book => {
        return {
            title: book.title,
            author: capitalize(book.author),
            Year: book.Year
        };
    });
}
let filtered = FilterFunction(books)
console.log(filtered)