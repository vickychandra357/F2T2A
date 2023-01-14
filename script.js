let arr = [];
if (arr.length === 0) {
  document.getElementById('table').classList.add('hidden');
}
let nameEl = document.getElementById("name");
let professionEl = document.getElementById("profession");
let ageEl = document.getElementById("age");
let errorMsgEl = document.getElementById("error");
let successMsgEl = document.getElementById("success");
let addBtnEl = document.getElementById("addUserBtn");
let noOfEmployeeMsg = document.getElementById('two')  //line no 49 in Js
let tableBodyContent = document.getElementById('tableBody'); //storing the table body element. We have to add row in this table element.

addBtnEl.addEventListener("click", addUserFunction);

// Add User function---------------------------  ------------------------------------------------------------------------------------------------
function addUserFunction() {
  let namee = nameEl.value;
  let profession = professionEl.value;
  let age = ageEl.value;
  document.getElementById('table').classList.remove('hidden'); // remove hidden class from table element

  if (namee && profession && age) {

    // Employee is added 
    successMsgEl.classList.remove("hidden");  // success msg displayed
    errorMsgEl.classList.add("hidden");
    noOfEmployeeMsg.classList.add('hidden');

    // create one object from namee, profession, age & push that obj in global array
    let objEl = {
      Name: namee,
      Profession: profession,
      Age: age,
    }
    arr.push(objEl);

    // Initialising this table element's innerHTML with empty string so that in map functionwe can append it with table tag code
    tableBodyContent.innerHTML = '';

    // Now using map function here we basically storing each array emenet in one table row with delete btn and au indexing  
    arr.map((element, index) => {
      tableBodyContent.innerHTML += `
      <tr>
      <td>id: ${index + 1}.</td>
      <td>Name: ${element.Name}</td>
      <td>Prefession: ${element.Profession}</td>
      <td>Age: ${element.Age}</td>
      <td><button class="deleteButton" onclick="deleteUserWithIndex(${index})">Delete</button></td>
      </tr>`
      console.log(tableBodyContent);
    })
  } else {
    // one of or all fields are empty
    successMsgEl.classList.add("hidden");
    errorMsgEl.classList.remove("hidden");  // Error msg Displayed
    noOfEmployeeMsg.classList.remove('hidden')
  }

}

// Delete User Function--------------------------------------------------------------------------------------------------------------
let removedUserr;
function deleteUserWithIndex(index) {
  removedUserr = arr.splice(index, 1);
  console.log(removedUserr);
  // Now after removing the specified indexed element reprint the all user again
  tableBodyContent.innerHTML = '';
  console.log(arr)
  arr.map((element, index) => {
    tableBodyContent.innerHTML += `
    <tr>
    <td>id: ${index + 1}.</td>
    <td>Name: ${element.Name}</td>
    <td>Prefession: ${element.Profession}</td>
    <td>Age: ${element.Age}</td>
    <td><button class="deleteButton" onclick="deleteUserWithIndex(${index})">Delete</button></td>
    </tr>`
    console.log(tableBodyContent.innerHTML);
  })
  console.log(arr)
  if (arr.length === 0) {
    document.getElementById('table').classList.add('hidden');
    successMsgEl.classList.add("hidden");
    errorMsgEl.classList.remove("hidden");  // Error msg Displayed
    noOfEmployeeMsg.classList.remove('hidden')
  }
}     
        
