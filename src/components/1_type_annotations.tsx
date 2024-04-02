// string
const color: string = 'red';

// boolean
const isRed: boolean = color === "red";

// number
const age: number = 21

// array of strings
const colors: string[] = ['red', 'blue', 'green']

// array of booleans
const areColorsRed: boolean[] = [true, false, true]

// array of numbers
const numbers: number[] = [1, 2, 3, 4, 5]

// function
function add(a: number, b: number): number {
    return a + b
}

function printColors(colors: string[]) {
    console.log(colors);

}
printColors(['rohit', 'khatri'])

function printAge(age: number) {
    console.log(age);

}
printAge(21)

// objects
// interface - describe different properties of an object

// way 1:
// car: {year: number, model: string, make: string}

// way 2:
interface Car {
    year: number;
    make: string;
    model: string;
}
function formatCar(car: Car) {
    return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`
}

formatCar({ year: 2015, make: 'Ford', model: 'Mustand' })