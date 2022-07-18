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
    function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;


        setTimeout(() => {
          if (shouldResolve) {
            // Fulfill
            resolve(position, delay);
          } else {
            // Reject
            reject(position, delay);
          }
        }, values.delay)
      });
  };

    for (let i = 0; i < values.amount; i += 1) {
      createPromise(values.amount, values.step)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    };

};

form.addEventListener('submit', onFormSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(position, delay);
      } else {
        // Reject
        reject(position, delay);
      }
    }, delay)
  })
};





