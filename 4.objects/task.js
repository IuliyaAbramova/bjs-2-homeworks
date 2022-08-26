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

/*console.log(studentThree);
console.log(studentFour);*/

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
/*console.log(Object.getPrototypeOf(studentThree) === Student.prototype);
console.log(studentThree.setSubject('History'));*/

// ваш код для остальных методов

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
    return this.marks.push(mark);
  } 
}
console.log(studentThree.addMark(5));
console.log(studentThree.addMark(4));
console.log(studentThree.addMark(5));

Student.prototype.addMarks = function(mark1, mark2, mark3, ...mark) {
  return this.marks.push(mark1, mark2, mark3, ...mark);
}

console.log(studentThree.addMarks(5, 4, 5, 5, 4));

Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
}

console.log(studentThree.getAverage());

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  return this.excluded = reason;
}

console.log(studentThree.exclude('low grades'));