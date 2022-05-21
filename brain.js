//import { id, name, salary } from "./employeeRegister";

//array declaration
var employee = [];
//making class of employee
class Employee {
    function() {
//getting values from input field
      var ID = document.getElementById("id").value;
      var Name = document.getElementById("name").value;
      var Salary = document.getElementById("salary").value;
     //object
      var Details = {
        Empid: `${ID}`,
        Empname: `${Name}`,
        Empsalary: `${Salary}`,
      };        
     console.log(Details);
    }
  }
//validation for empty field
      function getValue() {
        var ID = document.getElementById("id").value;
        var Name = document.getElementById("name").value;
        var Salary = document.getElementById("salary").value;
        var partSalary = (Salary*15)/100;
        console.log(Salary);
        if (ID == "" || Name == "" || Salary == "") {
          document.getElementById("error").innerHTML =
            "All fields must be filled.";
        }
        else if (Salary<30000){
         "use strict";
         Salary = 30000;
        }
       

        var Details = {
          Employee_id: `${ID}`,
          Employee_name: `${Name}`,
          Employee_salary: `${Salary}`,
        };
        console.log(typeof Details);
    
        employee.push(Details);
        this.JSON.stringify(employee)
         
        // console.log(myJSON)
       
        display();
      }
//display funch for employee details
      function display() {
        html1 = `<table><tr><th>ID</th><th>Name</th><th>Basic Salary</th><th>Updated Salary</th></tr>`;
        html2 = `<tr><th></th><th></th><th></th><tr></table>`;
        var tabRow = "";
        tabRow += `<tr><td>${id}</td><td>${name}</td><td>${salary}</td><td></td></tr>`;

        //arrow function || debug function
        // var hello;

// hello = (val) => `${name}` + val;

// document.getElementById("teer").innerHTML = hello(`${name}`);
        try {
            var num = 0;
            var str = num.toString();

          employee.forEach((element) => {
            if (element.Employee_salary > 0) {
                // console.log(typeof str); 
                console.log(typeof element.Employee_salary);
                
              var updatedSalary = element.Employee_salary * 1;
              
              html1 += `<tr>
        <td>${element.Employee_id}</td>
        <td>${element.Employee_name}</td>
        <td>${element.Employee_salary}</td>
        <td>${updatedSalary}</td>
        </tr>`;
            }
          });
          document.getElementById("data").innerHTML =  html1 +  html2;
        } 
        catch (Catcherror) {
          alert("There is some error");
        }

      };
     

    
    