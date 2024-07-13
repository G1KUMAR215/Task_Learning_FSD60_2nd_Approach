document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form-container');
    const tableContainer = document.getElementById('table-container');

    // Create Form
    const form = document.createElement('form');
    form.id = 'user-form';
    
    const fields = [
        { label: 'First Name', type: 'text', id: 'firstName' },
        { label: 'Last Name', type: 'text', id: 'lastName' },
        { label: 'Email', type: 'email', id: 'email' },
        { label: 'Address', type: 'text', id: 'address' },
        { label: 'Pincode', type: 'text', id: 'pincode' },
        { label: 'Gender', type: 'radio', id: 'gender', options: ['Male', 'Female', 'Other'] },
        { label: 'Choice of Food', type: 'checkbox', id: 'food', options: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'] },
        { label: 'State', type: 'text', id: 'state' },
        { label: 'Country', type: 'text', id: 'country' }
    ];

    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = field.label;
        div.appendChild(label);

        if (field.type === 'radio' || field.type === 'checkbox') {
            field.options.forEach(option => {
                const input = document.createElement('input');
                input.type = field.type;
                input.name = field.id;
                input.value = option;
                input.className = 'form-check-input';
                
                const optionLabel = document.createElement('label');
                optionLabel.textContent = option;
                optionLabel.className = 'form-check-label';
                
                div.appendChild(input);
                div.appendChild(optionLabel);
                div.appendChild(document.createElement('br'));
            });
        } else {
            const input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.className = 'form-control';
            div.appendChild(input);
        }
        
        form.appendChild(div);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'btn btn-primary';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        addUserToTable();
    });
    form.appendChild(submitButton);

    formContainer.appendChild(form);

    // Create Table
    const table = document.createElement('table');
    table.className = 'table table-striped';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['First Name', 'Last Name', 'Email', 'Address', 'Pincode', 'Gender', 'Food', 'State', 'Country'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.id = 'user-table-body';
    table.appendChild(tbody);

    tableContainer.appendChild(table);
});

function addUserToTable() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const tbody = document.getElementById('user-table-body');
    const row = document.createElement('tr');

    const data = [firstName, lastName, email, address, pincode, gender, food, state, country];
    data.forEach(item => {
        const td = document.createElement('td');
        td.textContent = item;
        row.appendChild(td);
    });

    tbody.appendChild(row);
    document.getElementById('user-form').reset();
}
