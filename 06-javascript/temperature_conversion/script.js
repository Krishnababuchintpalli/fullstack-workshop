
function temperatureConverter() {
    const choice = prompt(`
Enter your choice:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
(Enter 1 or 2):`);
    if (choice !== '1' && choice !== '2') {
        alert(' Invalid choice! Please enter 1 or 2.');
        return temperatureConverter(); 
    }
   
    const temp = parseFloat(prompt('Enter temperature value:'));
    
    if (isNaN(temp)) {
        alert(' Please enter a valid number!');
        return temperatureConverter();
    }
    
    let result, unit;
    
  
    if (choice === '1') {
        result = (temp * 9/5) + 32;
        unit = '°F';
        alert(`${temp}°C = ${result.toFixed(2)}°F`);
    } else {
        result = (temp - 32) * 5/9;
        unit = '°C';
        alert(`${temp}°F = ${result.toFixed(2)}°C`);
    }
    
    console.log(`${temp} ${choice === '1' ? '°C' : '°F'} → ${result.toFixed(2)} ${unit}`);
    
    const again = confirm('Convert another temperature?');
    if (again) {
        temperatureConverter();
    }
}

temperatureConverter();
