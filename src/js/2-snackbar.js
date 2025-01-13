import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayİnput = document.querySelector('.delay-input');
console.dir(delayİnput);
delayİnput.addEventListener('input', () => {
    const inputValue = delayİnput.value.trim();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`❌ Rejected promise in ${inputValue}ms`);
            resolve(`✅ Fulfilled promise in ${inputValue}ms`);
        }, inputValue);
    })
    Promise.resolve();
        .then(value => console.log(value));

})