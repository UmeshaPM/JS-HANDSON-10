// Q-1:-

// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const studentFolder = {
    getDetails(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    },
}
studentFolder.details = function(){
    console.log(`The student name is ${this.fName} ${this.lName} and the his age is ${this.age}`);
}

const firstStudent = Object.create(studentFolder);
firstStudent.getDetails('Guru', 'Prasad', 21);
firstStudent.details();

// output: The student name is Guru Prasad and the his age is 21

const secondStudent = Object.create(studentFolder);
firstStudent.getDetails('Nihal', 'Pawar', 25);
firstStudent.details();

// output: The student name is Nihal Pawar and the his age is 42

//..................................................................................................................................................................................................

//Q-2:-

//Write code to explain prototype chaining.

const mainProto = {                           //parent object
    detailOne(fname,lname,location,course){
        this.fname = fname;
        this.lname = lname;
        this.location = location;
        this.course = course;
    },
    details(){
        console.log(`Hi, I am ${this.fname} ${this.lname} and my current working location is ${this.location} with the help of ${this.course} course from prepbytes`);
    },
};

//output : Hi, I am Umesh PM and my current working location is Davangere with the help of Full Stack Development course from prepbytes

const myName = Object.create(mainProto);          
myName.detailOne("Umesh","PM","Davangere","Full Stack Development");
console.log(myName);
myName.details();

//output : {fname: 'Umesh', lname: 'PM', location: 'Davangere', course: 'Full Stack Development'}

const myBrother = Object.create(mainProto);            

myBrother.detailTwo = function(fname,lname,location,course){
    mainProto.detailOne.call(myBrother, fname,lname,location,course);     
    this.course = course;                                       
}
myBrother.intro = function(){
    console.log(`My brother is ${this.fname} ${this.lname} and he opted ${this.course} course from JSpider.`);  
}

//output : My brother is sharath PM and he opted JAVA Development course from JSpider.

const sharath = Object.create(myBrother);          
sharath.detailTwo("sharath","PM","Bengalore",'JAVA Development');  
sharath.intro();      
sharath.details();        

//output : Hi, I am sharath PM and my current working location is Bengalore with the help of JAVA Development course from prepbytes

//..................................................................................................................................................................................................

//Q-3:-

// Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays.

const MainPrototype = {
    calculateTotalMarks(arrayOfMarks){
    let sum = 0;
    for(let i in arrayOfMarks){
        sum+= arrayOfMarks[i];
    }
    console.log(`He  earned total of ${sum}.`);

}
}

let KiranMarks = [49, 29, 83, 39, 88];
MainPrototype.calculateTotalMarks(KiranMarks);

// output : He  earned total of 288.


let VinayMarks = [85, 30, 88, 68, 45];
MainPrototype.calculateTotalMarks(VinayMarks);


// output : He  earned total of 316.

//..................................................................................................................................................................................................

//Q-4:-

//Write a javascript function to retrieve all the name of objects own and inheriated properties.

function PersonalDetails(first, last, color, sport){

    this.firstName = first;
    this.lastName = last;
    this.favColor = color;
    this.favSport = sport;
}
PersonalDetails.prototype.age = 29;
const mySister = new PersonalDetails("Pooja","KV","Red","RE");
console.log("mySister");
console.log("The age of my Sister is " + mySister.age);