import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayİnput = document.querySelector('.delay-input');
console.dir(delayİnput);
const formEl = document.querySelector('.form');

const delayFormSubmit = event => {
    event.preventDefault();

    const inputValue = event.target[0].value;
    console.dir(inputValue);
    
    console.dir(event.target[2].checked);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
           
                if( event.target[2].checked)  {
                   iziToast.success({
    message: `❌ Rejected promise in ${inputValue}ms`,
}); 
                } else {
                    iziToast.error({
    title: 'Error',
    message: `✅ Fulfilled promise in ${inputValue}ms`,
});
                }
      }, inputValue);
  });


}

formEl.addEventListener('submit', delayFormSubmit);
