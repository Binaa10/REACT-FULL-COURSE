const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy", 
      "adventure",
      "fiction", 
      "novels", 
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos", 
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: { 
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
//const title = book.title;
//const author = book.author;
//console.log(title, author);

/*const {
  title,
  author,
  genres,
  pages,
  hasMovieAdaptation,
  publicationDate,
  translations,
  ...remainingg
} = book;
console.log(genres[0]);
const [primary, secondary, ...remaining] = genres;
console.log(primary);
console.log(secondary);
console.log(remaining);
console.log(remainingg);
const update = { ...book, newTitle: "biniyam", pages: 12 };
const newarray = [...genres, "alemu", (genres[1] = "bin")];
console.log(update);
console.log(newarray);

const info = `the existing title is ${title} the price is ${
  50 + 20
} and it has ${
  hasMovieAdaptation ? "movie adaptation" : "no movie adaptatio"
}  the current title is ${update.newTitle}.`;
const multi = `the one is 1 and
the two is 2`;
console.log(info);
console.log(multi);

const pagesRange = pages > 1000 ? "over thousend" : "below thousend";
console.log(pagesRange);

const year = (str) => str.split("-")[0];
console.log(year(publicationDate));
const sum = (a, b) => a + b;
const noArgu = () => "hello world";
console.log(sum(1, 2));
console.log(noArgu());

console.log(true && "not true");
console.log(null && "not null");
console.log(0 && "not 0");
console.log(undefined && "defined");
console.log(true || "not true");
console.log("body" || "not body");
const array = book.translations.spanish || "not transalted";
console.log(true ?? "not true");
console.log(null ?? "not null");
console.log("" ?? "not null");
console.log(array);

function totalcount(length) {
  let count = 0;
  for (let i = 1; i <= length; i++) {
    const alex = getBook(i);
    let m =
      alex.reviews.goodreads.reviewsCount +
      alex.reviews.librarything.reviewsCount;
    count = count + m;
  }
  return count;
}
console.log(totalcount(2));
*/
const books = getBooks();
const allTitle = books.map((book) => book.title);
console.log(allTitle);
const essentialdata = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
console.log(essentialdata);
const longooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longooks);

const adventuregenres = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventuregenres);
const ale = adventuregenres.forEach(function (elem) {
  console.log(elem);
});
ale;

const sumpages = books.reduce((sum, book) => book.pages + sum, 0);
console.log(sumpages);

const x = [1, 3, 2, 0, 9];
const y = x.slice().sort((a, b) => b - a);
console.log(y);
console.log(x);

const sortedByPage = books
  .slice()
  .sort((book1, book2) => book2.pages - book1.pages);
console.log(sortedByPage);

const rt = [2, 3, 4, 5, 6];
const rtt = rt.map(function (elem) {
  elem = elem * 2;
  return elem;
});
console.log(rtt);

const qwerta = ["ale", "alemu"];
const strings = qwerta.map((ele) => ele.toUpperCase());
console.log(strings);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const nameextract = users.map((ele) => ele.name);
console.log(nameextract);

const numbers = [1, 6, 3, 8, 2, 10];
const numbersfilter = numbers.filter((ele) => ele > 5);
const numberseven = numbers.filter((ele) => ele % 2 == 0);
console.log(numberseven);
console.log(numbersfilter);

const userss = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const checkage = userss.filter((ele) => ele.age > 30);
console.log(checkage);
console.log(userss[0].name);

const numberss = [1, 2, 3, 4];
const total = numberss.reduce((sum, ele) => sum + ele, 0);
const product = numberss.reduce((mul, ele) => mul * ele, 1);
console.log(total);
console.log(product);

const usersss = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const objectProduct = usersss.reduce((total, ele) => total + ele.age, 0);
console.log(objectProduct);
// Expected output: 90

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const intoone = matrix.reduce((con, elem) => con.concat(elem), []);
console.log(intoone);
// Expected output: [1, 2, 3, 4, 5, 6]

//Add a new object into the array
const newBook = {
  id: 6,
  title: "biniyam",
};

const newAdded = [...books, newBook];
console.log(newAdded);

const yz = [1, 2, 6, 3, 5, 0];
//const sortedyz = yz.sort((a, b) => a - b);
//const sortedimmutable = [...yz].sort();
const sortted = yz.slice().sort();
console.log(yz);
console.log(sortted);

//Delete an object into the array
const afterDelete = newAdded.filter((book) => book.id !== 3);
console.log(afterDelete);

//Upadte the array
const UpdatetheArray = afterDelete.map((book) =>
  book.id == 1 ? { ...book, pages: 126 } : book
);
console.log(UpdatetheArray);

const test = [1, 2, 3, 4, 5];
const Updatedtest = test.map((ele) => (ele == 1 ? 0 : ele));
console.log(Updatedtest);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((ele) => ele.json())
  .then((data) => console.log(data));
console.log("biniyam");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
const ababi = getTodos();
console.log(ababi);

console.log("biniyam");
