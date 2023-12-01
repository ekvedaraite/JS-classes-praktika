// 1 užduotis
console.log("1 UŽDUOTIS")
function Movie(name, year, director, budget, income){
    this.name = name
    this.year = year
    this.director = director
    this.budget = budget
    this.income = income
}

Movie.prototype.getIntroduction = function(){
    console.log(`Name: ${this.name}\nYear:  ${this.year}\nDirector:  ${this.director}`)
}

Movie.prototype.getProfit = function(){
    console.log(`Total profit: ${this.income - this.budget}`)
}
const movie1 = new Movie("Harry Potter and the Philosopher's Stone", 2001, "Chris Columbus", 125000000, 9500000000)
movie1.getIntroduction()
movie1.getProfit()


// 2 užduotis
console.log("2.1 UŽDUOTIS")
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.getIntroduction = function(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\n`)
    }
    this.getAge = function() {
        const currentYear = new Date().getFullYear()
        const age = currentYear - this.year
        if (age >= 10) {
            console.log("11 metų arba senesnis")
        } else {
            console.log("10 metų arba naujesnis")
        }
    }
}

  const car1 = new Car("BMW", "316", 1988)
  car1.getIntroduction()
  car1.getAge()

// 2.2 užduotis
console.log("2.2 UŽDUOTIS")
function Motorcycle(make, model, year, wheels){
    this.make = make
    this.model = model
    this.year = year
    this.wheels = wheels
    this.getIntroduction = function(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\n`)
    }
    this.getAge = function() {
        const currentYear = new Date().getFullYear()
        const age = currentYear - this.year
        if (age >= 10) {
            console.log("11 metų arba senesnis")
        } else {
            console.log("10 metų arba naujesnis")
        }
    }
    this.getWheelsNumber = function() {
        if (wheels == 3) {
            console.log("Motociklas turi tris ratus")
        } else if (wheels == 2) {
            console.log("Motociklas turi du ratus")
        } else {
            console.log("Neteisingas skaičius")
        }
    }
}

  const motorcycle1 = new Motorcycle("Yamaha", "YZF", 2000, 2)
  motorcycle1.getIntroduction()
  motorcycle1.getAge()
  motorcycle1.getWheelsNumber()

console.log("-----------------------------------")

  const motorcycle2 = new Motorcycle("Harley-Davidson", "Tri Glide Ultra Classic", 2021, 3)
  motorcycle2.getIntroduction()
  motorcycle2.getAge()
  motorcycle2.getWheelsNumber()