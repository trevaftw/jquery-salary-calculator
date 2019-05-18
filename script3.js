//this file is my new test file. script works, but it is a hackjob. going to try and code it properly.

console.log('javascript');

$(document).ready(readyNow);

let employeeList = [
    {
        fName: 'Jen',
        lName: 'Barber',
        idid: 4521,
        position: 'Team Laead',
        money: 80000,
    },
    {
        fName: 'Maurice',
        lName: 'Moss',
        idid: 8724,
        position: 'Support Team',
        money: 58000,
    },
    {
        fName: 'Roy',
        lName: 'Smith',
        idid: 9623,
        position: 'Quality Assurance',
        money: 48000,
    }
];

console.log('employeeList,', employeeList);

function readyNow() {
    console.log('jquery'); //when the page is ready and jquery is sourced correctly, consle log jquery
    $('#submitButton').on('click', addEmployee); //when the submit button is clicked, run the add employee function
    $('#tableBody').on('click', '.deleteRow', removeEmployee); //hey jq, when we click in the table body, specifically the money class, run the remove employee function
}


function addEmployee() {
    console.log('submit click'); //each time this function is run, it will conbsole log this

    // define where each employee info comes from 

    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let idid = $('#id').val();
    let position = $('#title').val();
    let money = $('#annualSalary').val();

    let newEmployee = { fName, lName, idid, position, money };

    employeeList.push(newEmployee);
    console.log('new employeeList,', employeeList);

    //each time this function run (which is when the submit button is clicke), it will append the inputs from the DOM (which are defnied from the above variables) into table below the data
    $('#tableBody').append(` 
        <tr>
            <td class="Fname">${fName}</td>
            <td class="Lname">${lName}</td>
            <td class="idid">${idid}</td>
            <td class="position">${position}</td>
            <td class="money">${money}</td>
            <td><button id="${idid}" class="deleteRow">Delete</button></td>
        </tr>
    `)
    // after the input from the DOM is appended into the table, we will now empty the inputs 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    let total = 0;
    for (let i = 0; i < employeeList.length; i++) {
        total = total + Number(employeeList[i].money); //everytime we click submit, it sets the total to be equal to the sum of all the totals 
    }
    let monthlyIncome = total / 12; //looking for monthly cost, so divide yearly slaary by 12 to get monthly
    let fixedMonthlyIncome = monthlyIncome.toFixed(2); //fixes the decimal length to be only two places

    $('#salaryTotal').text(fixedMonthlyIncome); //hey jquery, append our monthly slaary cost to the dom where we have the id #salary total

    if (monthlyIncome > 20000) {  //if the monthly salary is greater than 20k, change it to red
        $('#salaryTotal').css('color', 'red');
    } else { //otherwise if it's not greater than 20k, set it to black
        $('#salaryTotal').css('color', 'black');
    }

}

//when we run this function, we will remove the parent of the parent of this (this is the button, the parent is the td, and that parent is the row.)
function removeEmployee() {
    console.log('remove');
    $(this).parent().parent().remove();
    
    // employeeList.splice(this, this);
    // for (j = 0; j < employeeList.length; j++) {
    //     if (employeeList[j].idid === this.idid) {
    //         employeeList.splice(j, 1);
    //     }
    // }

    console.log('updated removed employeeList,', employeeList);

    let total = 0;
    for (let i = 0; i < employeeList.length; i++) {
        total = total + Number(employeeList[i].money) - Number($('this').text());

    }
    let monthlyIncome = total / 12;
    let fixedMonthlyIncome = monthlyIncome.toFixed(2);

    $('#salaryTotal').text(fixedMonthlyIncome);

    if (monthlyIncome > 20000) { //same logic from above WRT to the texdt color applies here
        $('#salaryTotal').css('color', 'red');
    } else {
        $('#salaryTotal').css('color', 'black');
    }
}
