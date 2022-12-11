//Class Example
class Person {
    constructor(name, age, salary, gender){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.gender = gender;
    }
}
var test = new Person("Ajay", "22", "10,000", "Male")
console.log(test.name)
console.log(test.age)
console.log(test.salary)
console.log(test.gender)


// Ex
class Car{
    constructor(brand,color){
        this.brand = brand;
        this.color = color;
    }
    printcolor(str){
        return str + this.brand
    }
}
var a = new Car("Audi","White")
var b = a.printcolor("The brand of the car is ")
console.log(b)

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.radiusCircle); //get radiusCircle
  
  obj1.radiusCircle = 2.2;
  console.log(obj1.radiusCircle); //set radiusCircle