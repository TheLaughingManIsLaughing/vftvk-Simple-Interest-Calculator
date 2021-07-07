function compute() {
    
    // Gets the principal input from the HTML
    var principal = document.getElementById("principal");

    // Checks the principal value to make sure it is positive
    if (principal.value < 1) {
        alert("Please enter a positive value.");
        principal.focus();
        return false;
    }

    // Calculates the interest and stores it
    let interest = principal.value * years.value * rate.value / 100;
    // Calculate the year in the future
    updatedYear = new Date().getFullYear() + parseInt(years.value);
    // Get the result ID
    results = document.getElementById("results")
    // Writes the HTML statement into the results
    results.innerHTML = "<p>If you deposit <mark>" + principal.value + "</mark>,<br>an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + updatedYear + "</mark></p>";
}

// Updates the slider text value on the HTML page when the slider moves
function updateSlider() {
    // Gets the rate value
    var rateValue = document.getElementById("rate").value;
    // Writes the rate value into the HTML text
    document.getElementById("rateLabel").innerHTML = rateValue + "%"
}
        