let firstName = prompt('Please enter your first name:');
let lastName = prompt('Please enter your last name:');
const reg1 = /[^a-zA-Zа-яА-Я]/;

function NameControlAndSayHello() {
    if ((reg1.test(firstName) == true) || (reg1.test(lastName) == true)) {
        console.log('Wrong input');
        alert('Wrong input!');
    } else {
        firstName = firstName[0].toUpperCase() + firstName.slice(1);
        lastName = lastName[0].toUpperCase() + lastName.slice(1);
        alert(`Hello, ${firstName} ${lastName}!`);
    }
}
NameControlAndSayHello();