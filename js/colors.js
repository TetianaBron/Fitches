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