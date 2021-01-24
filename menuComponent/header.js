const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const user_ = document.getElementById('user-');

function mostrar(){
    one.style.display = 'flex';
    two.style.display = 'block';
    three.style.display = 'block';
    four.style.display = 'block';
    five.style.display = 'block';
    six.style.display = 'block';
    seven.style.display = 'block';
    user_.style.paddingBottom = '0rem';
}

function ocultar(){
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';
    seven.style.display = 'none';
    user_.style.paddingBottom = '3.8rem';
}