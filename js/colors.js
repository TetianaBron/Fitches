const secondDiv = document.querySelector('div:nth-child(2)');
const thirdLabel = document.querySelector('label:nth-child(6)');
const button = document.querySelector('.button');
secondDiv.style.backgroundColor = '#ffaa0099'; //#fa09
thirdLabel.style.backgroundColor = '#0afc'; 

button.addEventListener('mouseenter', function () {
    this.classList.add('active');
});

button.addEventListener('mouseleave', function () {
    this.classList.remove('active');
});

const form = document.getElementById('form');
// const form = document.getElementsByTagName('form')[0];
// const form = document.querySelector('#form');

form.addEventListener('click', function (event) { 
    if (event.target === thirdLabel) {
        secondDiv.style.color = '#f00';
    }
});

const container = document.querySelector('.colors');
const inputs = container.querySelectorAll('input');
const labels = container.querySelectorAll('label');
const circle = document.querySelector('.circle');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        const index = this.getAttribute('data-i');
        labels[index].innerText = labels[index].getAttribute('data-channel') + ': ' + this.value;

        circle.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
    });
    
}