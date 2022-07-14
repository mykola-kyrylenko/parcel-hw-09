// const createPromiseBtn = document.querySelector('button');
const form = document.querySelector('.form');
  
function onFormSubmit(event) {
  event.preventDefault();

  const delay = form.querySelector('[name="delay"]');
  const step = form.querySelector('[name="step"]');
  const amount = form.querySelector('[name="amount"]');

  const values = {
    delay: delay.value,
    step: step.value,
    amount: amount.value
  };
  console.log(values);
  

  for (let i = 0; i < values.amount; i += 1) {
      console.log(i)
    setTimeout(() => {
      console.log(i);

      createPromise(i, values.step)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });

        
    }, values.step);

  };


};

form.addEventListener('submit', onFormSubmit);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
    return Promise(resolve => {

      setTimeout(() => resolve(position), delay);
    });
  } else {
    // Reject
    return Promise(reject => {
      setTimeout(() => reject(position), delay);
    });
  };
};

