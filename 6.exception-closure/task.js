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

            if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
                throw new Error("Треугольник с такими сторонами не существует");    
            } 
        
    }
    
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;     
    } 

    getArea() {
        const semiPerimeter = this.getPerimeter() / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
        return Number(area.toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {

    try {
        return new Triangle(sideA, sideB, sideC);


    } catch {
        return ( 
            {
                getPerimeter() {
                    return "Ошибка! Треугольник не существует";
                },

                getArea() {
                    return "Ошибка! Треугольник не существует";
                }
            });

    }

}


