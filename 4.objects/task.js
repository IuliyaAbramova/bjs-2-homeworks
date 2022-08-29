'use strict';

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let studentOne = new Student('Ivan', 'male', 21 );
let studentTwo = new Student('Jon', 'male', 20 );
let studentThree = new Student('Anna', 'female', 20 );
let studentFour = new Student('Iuliya', 'female', 22 );

//console.log(studentOne);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

//console.log(studentOne.setSubject('History'));

// ваш код для остальных методов

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    return this.marks.push(mark);
  } 
}
//console.log(studentOne.addMark(5));
//console.log(studentOne.addMark(3));
//console.log(studentOne.addMark(4));

Student.prototype.addMarks = function(...mark) {
  if (this.marks != []) {
    this.marks = [];
    return this.marks.push(...mark);
  }
}

//console.log(studentOne.addMarks(5, 3, 4));

Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
}

//console.log(studentOne.getAverage());

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  return this.excluded = reason;
}

//console.log(studentOne.exclude('low grades'));