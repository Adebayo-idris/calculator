



let display = document.getElementById('display');
let message = document.getElementById('message');
const operator = ['+', '-', '*', '/'];
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log('here 1');
        //if (validate(`${display.innerText}${e.target.innerText}`)) {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    message.innerHTML = '';
                    if (validate(`${display.innerText}${e.target.innerText}`)) {
                        display.innerText = eval(display.innerText);
                    } else {
                        console.log('invalid');
                        message.innerHTML = "<strong style='color:red'>Invalid input</strong>";
                    }

                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '+':
                if (display.innerText) {

                    if (isNaN(display.innerText.slice(-1)) && display.innerText.slice(-1) !== '(') {
                        //display.innerText = display.innerText.slice(0, -1);
                        break
                    }
                }
            case '-':
                if (display.innerText) {

                    if (display.innerText.slice(-1) === ')') {
                        //display.innerText = display.innerText.slice(0, -1);
                        console.log('here 2')
                        break
                    }
                    if (display.innerText.slice(-1) === '-') {
                        //display.innerText = display.innerText.slice(0, -1);
                        console.log('here');
                        break
                    }
                    console.log('her 3e')
                }
            case ':':
                if (display.innerText) {
                    console.log('/ here', display.innerText, ' ', e.target.innerText)
                    if (display.innerText === '' || display.innerText.slice(-1) === '/') {
                        //display.innerText = display.innerText.slice(0, -1);
                        break
                    }

                }
            case '.':
                if (display.innerText) {
                    console.log('. here')
                    if (display.innerText.slice(-1) === '.') {
                        //display.innerText = display.innerText.slice( -1);
                        break
                    }

                }

            case '*':
                if (display.innerText) {
                    console.log('* here')
                    if (display.innerText.slice(-1) === '*' && e.target.innerText === '*') {
                        //display.innerText = display.innerText.slice( -1);
                        break
                    }
                }

            default:

                console.log(display.innerText);
                display.innerText += e.target.innerText;
        }
        // } else {
        //     console.log('invalid');
        //     message.innerHTML = "<strong>Invalid input</strong>";
        // }
    });
});

let validate = (str) => {
    const arr = str.split('');
    let open = 0; // s  Store count for open bracket
    let curr = '';
    console.log('err', arr);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log('element', element);
        if (element == ')') {
            open -= 1;
        }
        if (element == '(') {
            open += 1;
        }
    }

    console.log(`${open}`);
    if (open == 0) {
        return true;
    } else {
        return false;
    }
}