///this second JS file is the original file before I cleaned it up and allows me to mess around without effecting the original file. 
//this is here now as a relic if i need to reference it later

console.log('javascript');

$(document).ready(readyNow);



function readyNow() {
    console.log('jquery');
    $('#submitButton').on('click', addEmployee); //when the submit button is clicked, run the add employee function
    $('#tableBody').on('click', '.deleteRow', removeEmployee); //hey jq, when we click in the table body, specifically the money class, run the remove employee function

}

//the table of all new employees is an array
let employeeList = [];

function addEmployee() {
    console.log('submit click'); //each time this function is run, it will conbsole log this

    //each employee is an array of their info
    let employeeTable = {
        firstName: [],
        lastName: [],
        id: [],
        title: [],
        annualSalary: []
    };

    // define where each employee info comes from 
    employeeTable.firstName = $('#firstName').val()
    employeeTable.lastName = $('#lastName').val()
    employeeTable.id = $('#id').val()
    employeeTable.title = $('#title').val()
    employeeTable.annualSalary = $('#annualSalary').val()
    employeeList.push(employeeTable);


    //each time this function run, it will append the inputs from the above variables into the below tbales
    $('#tableBody').append(` 
        <tr>
            <td class="Fname">${employeeTable.firstName}</td>
            <td class="Lname">${employeeTable.lastName}</td>
            <td class="idid">${employeeTable.id}</td>
            <td class="position">${employeeTable.title}</td>
            <td class="money">${employeeTable.annualSalary}</td>
            <td><button class="deleteRow">Delete</button></td>
        </tr>
    `)
    // now empty the inputs 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    //for each click, push all the table data into the employeeList
    for (let i = 0; i < employeeTable.length; i++) {
        employeeList.push($('.Fname').text());
        employeeList.push(employeeTable[i]);
    }


    console.log('employeeList:', employeeList);

    // $('#salaryTotal').text(total);

    // console.log('total:', total);

    // console.log('employeeTable.annualSalary:', employeeTable.annualSalary);
    // console.log('employeeList:', employeeList);

    //originally had below as the way
    // to calcdulate the employee salarays. 
    // went back and made each employee into an object.
    // now going to find new way to do so.  



    let total = 15500; 
    let addedSalary = $('.money');
    for (let i = 0; i < addedSalary.length; i++) {
        total = total + Number(addedSalary[i].innerHTML);
        console.log('total:', total);
    }
    $('#salaryTotal').text(total);

    console.log('addedsalary', addedSalary);

    if (total > 20000) {
        $('#salaryTotal').css('color', 'red');
    } else {
        $('#salaryTotal').css('color', 'black');
    }



    // total = total + addedSalary;
    // console.log('addedSAalary', addedSalary);
    // $('#salaryTotal').text(total);

    // $('#salaryTotal').on('click', sumValues);

    // function sumValues() {
    //     total += total $('.money').val();
    // }


}

//when we run this function, we will remove the parent of the parent of this (this is the button, the parent is the td, and that parent is the row.)
function removeEmployee() {
    console.log('remove');
    $(this).parent().parent().remove();
}

function sumValues() {
    console.log('sumValues');
}