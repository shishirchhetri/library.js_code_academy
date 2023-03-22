class Media{
    constructor(title){
        this._title = title;
        this._rating = [];
        this._isCheckOut = false;

    }
    get title(){
        return this._title ;
    }

    get isCheckOut(){
        return this._isCheckOut;
    }

    get rating(){
        return this._rating + ' stars.';
    }

    toggleCheckOutStatus(){
        this._isCheckOut = !this._isCheckOut;
    }

    addRating(ratingVal){
        if(ratingVal <=5){
            this._rating.push(ratingVal);
        }else{
            console.log('Rating have to be less than 6');
        }
    }

    get averageRating(){
        this._rating.reduce((acc, rating)=> acc + rating,0);
        return Math.floor(sum/this._rating.length);
    }

    set isCheckOut(checkIn){
        this._isCheckOut = checkIn;
    }
}

class Book extends Media{
    constructor(title, author, pages, genere){
        super(title);
            this._title = title;
            this._author = author;
            this._pages = pages;
            this._genere = genere;
    }
    get author(){
        return this._author
    }

    get pages(){
        return this._pages;
    }

    get genere(){
        return this._genere;
    }
}

//instance of Book class
const storyOfTime= new Book('A Brief Story Of Time','Stephen Hawking',256,'Science');

storyOfTime.addRating(5);
console.log(storyOfTime.genere);
console.log(`The review for ${storyOfTime.title} is ${storyOfTime.rating}`);




// Movies director, title, runTime, movieCast
class Movies extends Media{
    constructor(title,director, runTime,movieCast){
        super(title);
        this._director= director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime + ' minutes';
    }
    get movieCast(){
        this._movieCast;
    }
}
//instance of movie class
const intersteller = new Movies('Intersteller','Christopher Nolan',169,['Matthew McConaughey','Anne Hathaway','Jessica Chastain','Bill Irwin','Ellen Burstyn','Michael Caine'])

console.log(`The runtime of intersteller is ${intersteller.runTime}`);
intersteller.addRating(5);
console.log('The review for intersteller movie is '+intersteller.rating)


//cd artist, title, songs   method => shuffle
class Cd extends Media{
    constructor(artist,title, songs){
        super(title)
            this._artist = artist;
            this._songs  = songs;
    }
    get artist(){
        return this._artist;
    }

    get songs(){
        return this._songs;
    }

    shuffle(){
        return this.songs.sort(()=>Math.floor(Math.random()*5));
    }
}
//instances of cs class

const midnights = new Cd('Taylor Swift','Midnights',['Brutal','Traitor','Drivers License','1 step forward, 3 step back']);

midnights.addRating(5);
console.log(`The artist of ${midnights.title} is ${midnights.artist}`);

