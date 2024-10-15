function calculateBMI() {
    // Get the weight and height input values
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
  
    // Check if the values are valid
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height!');
      return;
    }
  
    // Calculate the BMI
    let bmi = (weight / (height * height)).toFixed(2);
  
    // Analyze the BMI and give feedback
    let resultText = '';
    let resultClass = '';
  
    if (bmi < 18.5) {
      resultText = `Your BMI is ${bmi}. You are underweight.`;
      resultClass = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText = `Your BMI is ${bmi}. You are in the normal weight range.`;
      resultClass = 'normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText = `Your BMI is ${bmi}. You are overweight.`;
      resultClass = 'overweight';
    } else {
      resultText = `Your BMI is ${bmi}. You are obese.`;
      resultClass = 'obese';
    }
  
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = resultText;
    resultDiv.className = `result ${resultClass}`;
  
    // Update the gauge
    updateGauge(bmi);
  }
  
  function updateGauge(bmi) {
    const needle = document.getElementById('needle');
    let angle;
  
    // Map the BMI value to an angle for the needle
    if (bmi < 18.5) {
      angle = -45; // Underweight
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      angle = 0; // Normal
    } else if (bmi >= 25 && bmi <= 29.9) {
      angle = 45; // Overweight
    } else {
      angle = 90; // Obese
    }
  
    // Apply the rotation to the needle
    needle.style.transform = `rotate(${angle}deg)`;
  }
  