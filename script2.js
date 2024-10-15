function calculateBMI() {
	// Get the weight and height input values
	let weight = document.getElementById('weight').value;
	let height = document.getElementById('height').value;
  
	// Validate inputs
	if (!weight || !height || weight <= 0 || height <= 0) {
	  alert('Please enter valid weight and height!');
	  return;
	}
  
	// Convert height from feet to meters (1 foot = 0.3048 meters)
	let heightInMeters = height * 0.3048;
  
	// Calculate the BMI
	let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
	// Analyze the BMI and provide feedback
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
  
	// Define the minimum and maximum BMI values and their corresponding angles
	const minBMI = 10;
	const maxBMI = 40;
	const minAngle = -60; // Far left for very underweight
	const maxAngle = 60;  // Far right for obese
  
	// Clamp BMI to stay within gauge bounds
	let clampedBMI = Math.max(minBMI, Math.min(bmi, maxBMI));
  
	// Calculate the corresponding angle for the needle
	let angle = ((clampedBMI - minBMI) / (maxBMI - minBMI)) * (maxAngle - minAngle) + minAngle;
  
	// Apply the rotation to the needle
	needle.style.transform = `rotate(${angle}deg)`;
  }
  
