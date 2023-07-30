window.onload = function() {
    // Get the value of the "p" parameter from the URL
    const url = window.location.href;
    const paramStartIndex = url.indexOf("?p=");
    if (paramStartIndex !== -1) {
        const paramValue = url.substring(paramStartIndex + 3);
        // Display the parameter value on the page
        const displayResultElement = document.getElementById("displayResult");
        displayResultElement.textContent = paramValue;
    } else {
        // Parameter not found
        const displayResultElement = document.getElementById("displayResult");
        displayResultElement.textContent = "Parameter not found.";
    }
};
