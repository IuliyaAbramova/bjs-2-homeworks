function parseCount(meaning) {

    let meaningNumber = Number.parseInt(meaning);

    if (isNaN(meaningNumber)) {
        throw new Error("Невалидное значение");
    }
    return meaningNumber;
    
}
console.log(parseCount(123));
console.log(parseCount("012"));
console.log(parseCount("asfer"));

function validateCount(meaning) {
    
    try {
        return parseCount(meaning);

    } catch(error) {
        return error;

    }     
}
console.log(validateCount(123));
console.log(validateCount("235"));
console.log(validateCount("safd"));

class Triangle {

    constructor(sideA, sideB, sideC) {
           
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.perimeter = 0;

            if (this.sideA + this.sideB <= this.sideC || this.sideA + this.sideC <= this.sideB || this.sideB + this.sideC <= this.sideA) {
                throw new Error("Треугольник с такими сторонами не существует");    
            } 
        
    }
    
    getPerimeter() {
        this.perimeter = this.sideA + this.sideB + this.sideC;
        return this.perimeter;
    } 

    getArea() {
        const semiPerimeter = this.perimeter / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
        return Number(area.toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {

    try {
        const triangle = new Triangle(sideA, sideB, sideC);


    } catch {
        return (
            {
                getPerimeter: function() {
                    console.log("Ошибка! Треугольник не существует");
                },

                getArea: function() {
                    console.log("Ошибка! Треугольник не существует");
                }
            });

    }

}


