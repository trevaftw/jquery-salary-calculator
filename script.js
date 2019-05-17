console.log('javascript');

$(document).ready(readyNow);



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

    //tried runing the below code to add up all the money as they were added. didn't work. go back and start with basics 
    let total = 0; //we set the 
    let addedSalary = $('.money');
    for(let i = 0; i < addedSalary.length; i++){
        total = total + Number(addedSalary[i].innerHTML);
        console.log(total);
    }
    $('#salaryTotal').text(total);

    if (total > 20000 ) {
        $('#salaryTotal').css('color', 'red');
    }



    // total = total + addedSalary;
    console.log(addedSalary);
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