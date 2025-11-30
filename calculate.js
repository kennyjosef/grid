
document.getElementById("calcBtn").addEventListener("click", function () {

    // Get input values
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    // Error message elements
    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");

    // Reset styles
    const clearErrors = () => {
        [day, month, year].forEach(input => input.classList.remove("error-border"));
        [dayError, monthError, yearError].forEach(err => err.innerText = "");
    };
    clearErrors();

    let hasError = false;

    // Validate DAY
    if (!day.value || day.value < 1 || day.value > 31) {
        day.classList.add("error-border");
        day.classList.add('items-error');
        dayError.innerText = "Must be a valid day";
        hasError = true;
    }

    // Validate MONTH
    if (!month.value || month.value < 1 || month.value > 12) {
        month.classList.add("error-border");
        monthError.innerText = "Must be a valid month";
        hasError = true;
    }

    // Validate YEAR
    const currentYear = new Date().getFullYear();
    if (!year.value || year.value < 1900 || year.value > currentYear) {
        year.classList.add("error-border");
        yearError.innerText = "Must be in the past";
        hasError = true;
    }

    if (hasError) return;

    // Build date object
    const birthDate = new Date(year.value, month.value - 1, day.value);
    const today = new Date();

    // Check if date is invalid or in future
    if (birthDate > today || birthDate.getDate() != day.value) {
        day.classList.add("error-border");
        month.classList.add("error-border");
        year.classList.add("error-border");
        dayError.innerText = "Invalid date";
        hasError = true;
    }

    if (hasError) return;

    // AGE CALCULATION
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Output results
    // document.getElementById("resultYears").innerHTML = ` ${years} <em>years</em>`;
    document.getElementById("resultYears").innerHTML = `<span style="color: hsl(259, 100%, 65%);">${years}</span> <em>years</em>`;
    document.getElementById("resultMonths").innerHTML = `<span style="color: hsl(259, 100%, 65%);">${months}</span> <em>months</em>`;
document.getElementById("resultDays").innerHTML = `<span style="color: hsl(259, 100%, 65%);">${days}</span> <em>days</em>`;
    // document.getElementById("resultMonths").innerHTML = `${months} <em>months</em>`;
    // document.getElementById("resultDays").innerHTML = `${days} <em>days</em>`;
});

