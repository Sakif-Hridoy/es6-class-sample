class Student{


}


const student1 = new Student();
const student2 = new Student();
console.log(student1,student2);



class Student{

	constructor(){
		this.id = 1;
		this.name = "Heart";
	}
}


const student1 = new Student();
const student2 = new Student();
console.log(student1,student2);



class Student{

	constructor(sId,sName){
		this.id = sId;
		this.name = sName;
		this.school = "Mymensingh Zilla School";
	}
}


const student1 = new Student(12,"Beat");
const student2 = new Student(15,"IT");
console.log(student1,student2);
console.log(student1.id,student2.name);





class Parent{

	constructor(){
		this.fatherName = "November";
	}
}

class Child{
	constructor(name){
		this.name = name;
	}
}

const baby1 = new Child("Angel");
const baby2 = new Child("Prince");

console.log(baby1,baby2);





class Parent{

	constructor(){
		this.fatherName = "November";
	}
}

class Child extends Parent{

	constructor(name){
		super();
		this.name = name;
	}
}

const baby1 = new Child("Angel");
const baby2 = new Child("Prince");

console.log(baby1,baby2);



class Parent{

	constructor(){
		this.fatherName = "November";
	}
}

class Child extends Parent{

	constructor(name){
		super();
		this.name = name;
	}

	getFullName(){
		return this.name + " " + this.fatherName;
	}
}

const baby1 = new Child("Angel");
const baby2 = new Child("Prince");

console.log(baby1.getFullName(),baby2.getFullName());


