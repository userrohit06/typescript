interface Car1 {
    model: string
    year: number
}

function printCar(car: Car1) {
    console.log(car);
}

const mustang: Car1 = {
    model: "mustang",
    year: 2015
}

const camaro: Car1 = {
    model: 'Camaro',
    year: 2010
}

printCar(mustang)
printCar(camaro)

// Apply interface in front of object to get proper error (if there is), otherwise type inference can make some errors later in the program