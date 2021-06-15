//1. Write a JavaScript program to list the properties of a JavaScript object.
let student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student));

// 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
let students = { name: "David Rayy", sclass: "VI", rollno: 12 };
delete students.rollno;
console.log(students);

//3. Write a JavaScript program to get the length of a JavaScript object.
let Student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(Student).length);

//4. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.
let library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus) {
    console.log("Reading ");
  } else {
    console.log("Not reading ");
  }
}

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//Volume of a cylinder : V = πr^2h where r is the radius and h is the height of the cylinderconst pi = 3.14;
class cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  volume() {
    let vol = Math.PI * this.height * Math.pow(this.radius, 2);
    console.log(vol.toFixed(4));
  }
}
let cylinder1 = new cylinder(5, 10);
cylinder1.volume();

//6. Write a JavaScript program to sort an array of JavaScript objects.
let library1 = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
console.log(
  library1.sort(function (a, b) {
    return a.libraryID - b.libraryID;
  })
);
