window.onload = function() {
    // Get the value of the "p" parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get("p");

    if (paramValue !== null) {
        // Display the parameter value on the page
        const displayResultElement = document.getElementById("displayResult");
        displayResultElement.textContent = paramValue;
    } else {
        // Parameter not found
        const displayResultElement = document.getElementById("displayResult");
        displayResultElement.textContent = "Parameter not found.";
    }
};
