document.querySelector('form').addEventListener('submit', function(e) {
   e.preventDefault();
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#results');

   if(isNaN(height) || height <= 0){
       result.innerHTML = `Enter a valid height`;
   } else if(isNaN(weight) || weight <= 0){
       result.innerHTML = `Enter a valid weight`;
   } else {
       const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
       result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
   }
});
