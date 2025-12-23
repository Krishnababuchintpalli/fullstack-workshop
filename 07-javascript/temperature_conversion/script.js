// Temperature Converter
function temperatureConverter() {
    // Ask user to choose conversion type
    const choice = prompt(`
🌡️ TEMPERATURE CONVERTER 🌡️
Enter your choice:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
(Enter 1 or 2):`);
    
    // Validate choice
    if (choice !== '1' && choice !== '2') {
        alert('❌ Invalid choice! Please enter 1 or 2.');
        return temperatureConverter(); // Retry
    }
    
    // Ask for temperature value
    const temp = parseFloat(prompt('Enter temperature value:'));
    
    if (isNaN(temp)) {
        alert('❌ Please enter a valid number!');
        return temperatureConverter();
    }
    
    let result, unit;
    
    // Perform conversion
    if (choice === '1') {
        // Celsius to Fahrenheit: F = (C × 9/5) + 32
        result = (temp * 9/5) + 32;
        unit = '°F';
        alert(`${temp}°C = ${result.toFixed(2)}°F`);
    } else {
        // Fahrenheit to Celsius: C = (F − 32) × 5/9
        result = (temp - 32) * 5/9;
        unit = '°C';
        alert(`${temp}°F = ${result.toFixed(2)}°C`);
    }
    
    console.log(`${temp} ${choice === '1' ? '°C' : '°F'} → ${result.toFixed(2)} ${unit}`);
    
    // Ask if user wants to convert again
    const again = confirm('Convert another temperature?');
    if (again) {
        temperatureConverter();
    }
}

// Run the converter
temperatureConverter();
