console.log('javascript');

$(document).ready(readyNow);

let total = 0

function readyNow() {
    console.log('jquery');
    $('#submitButton').on('click', addEmployee); //when the submit button is clicked, run the add employee function
    $('#tableBody').on('click', '.deleteRow', removeEmployee); //hey jq, when we click in the table body, specifically the money class, run the remove employee function

}

function addEmployee() {
    console.log('submit click'); //each time this function is run, it will conbsole log this

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    //each time this function run, it will append the inputs from the above variables into the below tbales
    $('#tableBody').append(` 
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td class="money">${annualSalary}</td>
            <td><button class="deleteRow">Delete</button></td>
        </tr>
    `)
    // nbow empty the inputs 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}

//when we run this function, we will remove the parent of the parent of this (this is the button, the parent is the td, and that parent is the row.)
function removeEmployee() {
    console.log('remove');
    $(this).parent().parent().remove(); 
}