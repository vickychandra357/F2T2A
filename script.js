let employeeList = [];
    let employeeId = 1;
    function addEmployee() {
        const name = document.getElementById("name").value;
        const profession = document.getElementById("profession").value;
        const age = document.getElementById("age").value;
        if (name === "" || profession === "" || age === "") {
            document.getElementById("errorMessage").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
            document.getElementById("successMessage").innerHTML = "";
        } else {
            const employee = { id: employeeId, name: name, profession: profession, age: age };
            employeeList.push(employee);
            employeeId++;
            document.getElementById("errorMessage").innerHTML = "";
            document.getElementById("successMessage").innerHTML = "Success : Employee Added!.";
            document.getElementById("employeeForm").reset();
        }
    }
     
        