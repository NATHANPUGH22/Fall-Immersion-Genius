const clickButton = document.getElementById('click-button');
const clickMessage = document.getElementById('click-message');
clickButton.addEventListener('click', () => {
    clickMessage.textContent = 'Button clicked!';
});
const inputField = document.getElementById('input-field');
const inputMessage = document.getElementById('input-message');
inputField.addEventListener('input', (event) => {
    inputMessage.textContent = `You typed: ${event.target.value}`;
});
const hoverBox = document.getElementById('hover-box');
const hoverMessage = document.getElementById('hover-message');
hoverBox.addEventListener('mouseenter', () => {
    hoverMessage.textContent = 'Mouse is over the box!';
});
hoverBox.addEventListener('mouseleave', () => {
    hoverMessage.textContent = 'Mouse left the box!';
});
