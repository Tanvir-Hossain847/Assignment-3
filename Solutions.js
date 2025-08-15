/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
let dividedasset = area / 2;
console.log(dividedasset);

//solved



/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log('Laptop');
}
else if(money >=10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate');
}

//solved



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(let day = 1; day <= lastDay; day++){
    if(day % 3 === 0){
        console.log(day + '-' + 'medicine');
    }
    else{
        console.log(day + '-' + 'rest');
    }
}


//solved



/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
let req1 = fileName.endsWith('pdf') || fileName.endsWith('docx');

if(fileName.startsWith('#')){
    console.log('Store');
}
else if(req1){
    console.log('Store');
}
else{
    console.log('Delete');
}


//solved



/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
let email = student.name.toLowerCase() + student.roll + '.'  + student.department.toLowerCase() + "@ph.ac.bd";
console.log(email);

//solved




/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
let presentSalary = startingSalary;
for(let year = 1; year <= experience; year++){
    (presentSalary += presentSalary * 5/100);
}
console.log(presentSalary.toFixed(2));

//solved


