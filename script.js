const bmiCategory = (bmi) => {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        return "normal";
    } else if (bmi >= 25 && bmi <= 29.99) {
        return "overweight";
    } else {
        return "obese";
    }
};

const calculate = () => {
    let weight = document.querySelector('[name="weight"]').value;
    let height = document.querySelector('[name="height"]').value;

    console.log(weight);
    console.log(height);

    let bmi = (weight / (height * height)) * 10000;

    document.getElementById(
        "output"
    ).innerHTML = `Your Body Mass Index is ${bmi.toFixed(
        2
    )}. This is considered ${bmiCategory(bmi.toFixed(2))}.`;
};
