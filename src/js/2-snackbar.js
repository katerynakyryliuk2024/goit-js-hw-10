import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayİnput = document.querySelector('.delay-input');
console.dir(delayİnput);
const formEl = document.querySelector('.form');
console.dir(formEl);

const delayFormSubmit = event => {
    event.preventDefault();

    const inputValue = event.target[0].value;
    console.dir(inputValue);
    
    console.dir(event.target[2].checked);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
            if (event.target[2].checked) {
              return resolve();
    } else {
       reject(error);  
                }
        }, inputValue);
        
  });
   
    .then(responce => {
   return iziToast.success({
        title: 'Ok',
        message: `❌ Rejected promise in ${inputValue}ms`,
    });
})
    .catch (error => {
    return iziToast.error({
        title: 'Error',
        message: `✅ Fulfilled promise in ${inputValue}ms`,
    });
});

};




formEl.addEventListener('submit', delayFormSubmit);
