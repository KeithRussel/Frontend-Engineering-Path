class Media {
  // Set the title of the media
  constructor(title) {
    this._title = title;
    // Set the default value of isCheckedOut to false
    this._isCheckedOut = false;
    // Set the default value of ratings to an empty array
    this._ratings = [];
  }

  // Get the title of the media
  get title() {
    return this._title;
  }

  // Get the isCheckedOut value
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  // Get the ratings array
  get ratings() {
    return this._ratings;
  }

  // Check out the media
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Calculate the average rating of the media
  getAverageRating() {
    const lengthOfArray = this._ratings.length;
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );

    return ratingsSum / lengthOfArray;
  }

  // Add a rating to the ratings array
  addRating(rating) {
    // If the rating is less than 1 or greater than 5, throw an error.
    if (rating < 1 || rating > 5) {
      throw Error("Please input 1 to 5 rating only");
    } else {
      // Use the push method to add a new rating to the ratings array
      this._ratings.push(rating);
    }
  }

  // Check out the media
  set isCheckedOut(newCheckedOut) {
    this._isCheckedOut = newCheckedOut;
  }
}

/*
 *Class for Book extends Media
 */
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;

    mediaList._books.push(this._title + " | " + this._author);
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

/*
 *Class for Movie extends Media
 */
class Movie extends Media {
  // Set the director of the movie
  constructor(director, title, runTime) {
    // Call the super class constructor
    super(title);
    this._director = director;
    this._runTime = runTime;

    // Add the movie to the media list
    mediaList._movies.push(this._title + " | " + this._director);
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

/*
 *Class for CD extends Media
 */
class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._songs = [];
    this._artist = artist;

    // Add the CD to the media list
    mediaList._CDs.push(this._title + " | " + this._artist);
  }

  get songs() {
    return this._songs;
  }

  get artist() {
    return this._artist;
  }

  // Add a song to the songs array
  addSong(song) {
    this._songs.push(song);
  }

  shuffle() {
    // Use the shuffle method to shuffle the songs in the CD
    return this._songs.sort(() => Math.random() - 0.5);
  }
}

/*
 * Class for the Catalog
 */
class Catalog {
  constructor() {
    this._books = [];
    this._movies = [];
    this._CDs = [];
  }

  get books() {
    return this._books;
  }

  get movies() {
    return this._movies;
  }

  get cds() {
    return this._CDs;
  }
}

// Create a new catalog
const mediaList = new Catalog();

/*
 * Instantiate your Book, CD, and Movie objects here
 */

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
historyOfEverything.toggleCheckOutStatus;
// console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(3);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything);

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus;
speed.isCheckedOut;
speed.isCheckedOut;
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed);

const songs = new CD("Sad Songs", "Moira Dela Torre");
songs.addSong("Song1");
songs.addSong("Song2");
songs.addSong("Song3");
songs.addSong("Song4");
songs.addSong("Song5");
songs.shuffle();
console.log(songs);

const songs2 = new CD("Happy Songs", "Justin Bieber");

// mediaList.books;
console.log(mediaList);
