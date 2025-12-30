const temperatureConverter = () => {
    const choices = ['1', '2'];

    const choice = prompt(`
Enter your choice:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
(Enter 1 or 2):`);

    if (!choices.includes(choice)) {
        alert(`Invalid choice! Please enter 1 or 2.`);
        return temperatureConverter();
    }

    const temp = Number(prompt(`Enter temperature value:`));

    if (Number.isNaN(temp)) {
        alert(`Please enter a valid number!`);
        return temperatureConverter();
    }

    const conversions = {
        '1': {
            unitFrom: '°C',
            unitTo: '°F',
            formula: t => (t * 9) / 5 + 32
        },
        '2': {
            unitFrom: '°F',
            unitTo: '°C',
            formula: t => (t - 32) * 5 / 9
        }
    };

    const { unitFrom, unitTo, formula } = conversions[choice];
    const result = formula(temp);

    alert(`${temp}${unitFrom} = ${result.toFixed(2)}${unitTo}`);
    console.log(`${temp}${unitFrom} → ${result.toFixed(2)}${unitTo}`);

    const again = confirm(`Convert another temperature?`);
    if (again) {
        temperatureConverter();
    }
};

temperatureConverter();
