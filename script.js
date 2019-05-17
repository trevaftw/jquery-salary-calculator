console.log('javascript');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery');
    $('#submitButton').on('click', addEmployee);
}

function addEmployee() {
    console.log('submit click');

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#titile').val();
    let annualSalary = $('#annualSalary').val();

    $('#tableBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
        </tr>
    `)
}