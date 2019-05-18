console.log('javascript');

$(document).ready(readyNow);


function readyNow() {
    console.log('jquery'); //when the page is ready and jquery is sourced correctly, consle log jquery
    $('#submitButton').on('click', addEmployee); //when the submit button is clicked, run the add employee function
    $('#tableBody').on('click', '.deleteRow', removeEmployee); //hey jq, when we click in the table body, specifically the money class, run the remove employee function

}

function addEmployee() {
    console.log('submit click'); //each time this function is run, it will conbsole log this

    // define where each employee info comes from 
    let = firstName = $('#firstName').val()
    let = lastName = $('#lastName').val()
    let = id = $('#id').val()
    let = title = $('#title').val()
    let = annualSalary = $('#annualSalary').val()

    //each time this function run (which is when the submit button is clicke), it will append the inputs from the DOM (which are defnied from the above variables) into table below the data
    $('#tableBody').append(` 
        <tr>
            <td class="Fname">${firstName}</td>
            <td class="Lname">${lastName}</td>
            <td class="idid">${id}</td>
            <td class="position">${title}</td>
            <td class="money">${annualSalary}</td>
            <td><button class="deleteRow">Delete</button></td>
        </tr>
    `)
    // after the input from the DOM is appended into the table, we will now empty the inputs 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    let total = 0; //for the purpose of this, we start with a zero number in JS, but display 15500 on the DOM because there are three initial employees. 
    let addedSalary = $('.money');
    console.log('addedSalary,', addedSalary);

    //each time we click submit, we will run through the addedSlary variable (which is each item with the class $.money) at the innerHTML name (because this is where we find the value of the $.money class) and add them up
    for (let i = 0; i < addedSalary.length; i++) {
        total = total + Number(addedSalary[i].innerHTML); //everytime we click submit, it sets the total to be equal to the sum of all the totals 
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

    let total = 0;
    let addedSalary = $('.money');
    //each time we click delete, we will run through the addedSlary variable at the .money class value and add them up then subtract the value of this delete button that was clicked from that total
    for (let i = 0; i < addedSalary.length; i++) {
        total = total + Number(addedSalary[i].innerHTML) - Number($('this').text());
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
