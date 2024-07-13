document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const calculator = document.createElement('div');
    calculator.className = 'calculator';

    const display = document.createElement('input');
    display.id = 'display';
    display.type = 'text';
    display.disabled = true;
    calculator.appendChild(display);

    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    const buttonValues = [
        '7', '8', '9', '/', 
        '4', '5', '6', '*', 
        '1', '2', '3', '-', 
        '0', '.', '=', '+', 
        '%', 'M', 'M+', 'M-','C'
    ];

    buttonValues.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        buttons.appendChild(button);
    });

    calculator.appendChild(buttons);
    body.appendChild(calculator);

    let memory = 0;

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '=') {
                try {
                    display.value = eval(display.value.replace('%', '/100'));
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'C') {
                display.value = '';
            } else if (value === 'M') {
                memory = parseFloat(display.value);
            } else if (value === 'M+') {
                display.value = (parseFloat(display.value) + memory).toString();
            } else if (value === 'M-') {
                display.value = (parseFloat(display.value) - memory).toString();
            } else {
                display.value += value;
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (/\d/.test(key) || ['+', '-', '*', '/', '%'].includes(key)) {
            display.value += key;
        } else if (key === 'Enter') {
            try {
                display.value = eval(display.value.replace('%', '/100'));
            } catch {
                display.value = 'Error';
            }
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else {
            alert('Only numbers and arithmetic operators are allowed');
        }
    });
});
