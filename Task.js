// Task 1
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    get titleMovie(){
        return this.title
    }
    get studioMovie(){
        return this.studio
    }
    get ratingMovie(){
        return this.rating
    }
    set titleMovie(title){
        this.rating = title;
    }
    set studioMovie(studio){
        this.rating = studio;
    }
    set ratingMovie(rating){
        this.rating = "PG";
    }
}
var a = new Movie("Casino Royale", "Eon Productions","PG13");

console.log(a.ratingMovie)


// Task 2(Convert the UML diagram to Typescript class.)

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
  console.log(obj1.radiusCircle);
  console.log(obj1.colorCircle);
  obj1.radiusCircle = 5.0;
  obj1.colorCircle = "green";
  console.log(obj1.radiusCircle);
  console.log(obj1.colorCircle);
  console.log(obj1.toString);
  console.log(obj1.areaCircle);
  console.log(obj1.circumferenceCircle);

// Task 3 (Write a “person” class to hold all the details.)
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


// Task 4(write a class to calculate the uber price.)
class Uber{
    constructor(KMs,Price){
        this.KMs = KMs;
        this.Price = Price;
        this.rent = KMs * Price
        }
}
var a = new Uber("5","100")
console.log(a.rent)