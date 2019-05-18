console.log('javascript');

$(document).ready(readyNow);



function readyNow() {
    console.log('jquery');
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

    //each time this function run, it will append the inputs from the above variables into the below tbales
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
    // now empty the inputs 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    let total = 0;
    let addedSalary = $('.money');
    //each time we click submit, we will run through the addedSlary variable at the .money class value and add them up
    for (let i = 0; i < addedSalary.length; i++) {
        total = total + Number(addedSalary[i].innerHTML);
    }
    let monthlyIncome = total/12; 

    $('#salaryTotal').text(monthlyIncome);

    if (monthlyIncome > 20000) {
        $('#salaryTotal').css('color', 'red');
    } else {
        $('#salaryTotal').css('color', 'black');
    }

}

//when we run this function, we will remove the parent of the parent of this (this is the button, the parent is the td, and that parent is the row.)
function removeEmployee() {
    console.log('remove');
    $(this).parent().parent().remove();

    let total = 0;
    let addedSalary = $('.money');
    //each time we click submit, we will run through the addedSlary variable at the .money class value and add them up
    for (let i = 0; i < addedSalary.length; i++) {
        total = total + Number(addedSalary[i].innerHTML) - Number($('this').text());
    }
    let monthlyIncome = total/12; 

    $('#salaryTotal').text(monthlyIncome);

    if (monthlyIncome > 20000) {
        $('#salaryTotal').css('color', 'red');
    } else {
        $('#salaryTotal').css('color', 'black');
    }
}
