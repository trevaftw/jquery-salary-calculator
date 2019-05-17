console.log('javascript');

$(document).ready(readyNow);

let total = 0

function readyNow() {
    console.log('jquery');
    $('#submitButton').on('click', addEmployee);
}

function addEmployee() {
    console.log('submit click');

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

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

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

}
