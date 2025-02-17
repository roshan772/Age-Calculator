function calculateAge(){
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;

    // Ensure input is not empty
    if (!birthdateInput) {
        alert("Please enter a birthdate.");
        return;
    }

    // Convert "DD-MM-YYYY" to "YYYY-MM-DD"
    const birthdateParts = birthdateInput.split("-");
    if (birthdateParts.length !== 3) {
        alert("Invalid Date Format. Please enter a valid date in DD-MM-YYYY format.");
        return;
    }

    const birthDay = parseInt(birthdateParts[0], 10);
    const birthMonth = parseInt(birthdateParts[1], 10) - 1; // Months in JS start from 0
    const birthYear = parseInt(birthdateParts[2], 10);

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    // Validate if the birthdate is a valid date
    if (isNaN(birthDate.getTime())) {
        alert("Invalid Date. Please enter a valid date.");
        return;
    }

    // Calculate age
    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    // Calculate remaining months, weeks, and days
    const remainingMonths = ageInMonths % 12;
    const remainingWeeks = ageInWeeks % 4;
    const remainingDays = ageInDays % 7;

    // Display result
    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} years, ${remainingMonths} months, ${remainingWeeks} weeks, ${remainingDays} days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
        </div>
    `;

    resultContainer.style.display = "block";
}

// Attach event listener
document.getElementById("ageCalculator").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateAge();
});