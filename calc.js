// const day = document.getElementById('day')
// const month= document.getElementById('month')
// const year = document.getElementById('year')


// day.addEventListener("keyup", function(){
//     console.log("the day is", day.value)    
// })

// function currentAge (){
//     const newDate =new Date()
//     console.log("birth date is" , newDate)
// }
// currentAge()

document.getElementById("calcBtn").addEventListener("click", function () {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year) {
        alert("Please enter a valid date.");
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
        alert("Birth date cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display result
    document.getElementById("resultYears").innerHTML = `${years} <em>years</em>`;
    document.getElementById("resultMonths").innerHTML = `${months} <em>months</em>`;
    document.getElementById("resultDays").innerHTML = `${days} <em>days</em>`;
});

