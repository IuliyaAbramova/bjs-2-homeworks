'use strict';

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;    
    }

    set state(number) {
        if (number < 0) {
            this._state = 0; 
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
    
    fix() {
        this.state = this.state * 1.5;
        }
    }


const sherlock = new PrintEditionItem ("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); 
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state, type, magazine) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = magazine;
    }

    fix() {
        super.fix();
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, book) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = book;
    }
    
    fix() {
        super.fix();
    }

}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, novel) {
        super(author, name, releaseDate, pagesCount,);
        this.type = novel;
    }

}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, fantastic) {
        super(author, name, releaseDate, pagesCount,);
        this.type = fantastic;
    }

}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, detective) {
        super(author, name, releaseDate, pagesCount);
        this.type = detective;
    }

}

const picknick = new FantasticBook ("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
  
  console.log(picknick.author); 
  picknick.state = 10;
  console.log(picknick.state); 
  picknick.fix();
  console.log(picknick.state);