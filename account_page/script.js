let clickCount = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let upgrade1Cost = 10;
let upgrade2Cost = 20;

// Load game data from localStorage
function loadGame() {
    if (localStorage.getItem("clickCount")) {
        clickCount = parseInt(localStorage.getItem("clickCount"));
        cookiesPerClick = parseInt(localStorage.getItem("cookiesPerClick"));
        cookiesPerSecond = parseInt(localStorage.getItem("cookiesPerSecond"));
        upgrade1Cost = parseInt(localStorage.getItem("upgrade1Cost"));
        upgrade2Cost = parseInt(localStorage.getItem("upgrade2Cost"));
        updateDisplay();
    }
}

// Save game data to localStorage
function saveGame() {
    localStorage.setItem("clickCount", clickCount);
    localStorage.setItem("cookiesPerClick", cookiesPerClick);
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
    localStorage.setItem("upgrade1Cost", upgrade1Cost);
    localStorage.setItem("upgrade2Cost", upgrade2Cost);
}

// Clicking the boring cookie
function clickCookie() {
    clickCount += cookiesPerClick;
    updateDisplay();
}

// Buying an upgrade from the store
function buyUpgrade(upgradeNumber) {
    let upgradeCost;
    switch (upgradeNumber) {
        case 1:
            upgradeCost = upgrade1Cost;
            break;
        case 2:
            upgradeCost = upgrade2Cost;
            break;
        default:
            return;
    }

    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        upgrade1Cost += 10;
        upgrade2Cost += 20;

        switch (upgradeNumber) {
            case 1:
                cookiesPerClick *= 2;
                break;
            case 2:
                cookiesPerSecond += 5;
                startCookieProduction();
                break;
        }

        updateDisplay();
    }
}

// Start automatic cookie production from upgrades
function startCookieProduction() {
    setInterval(() => {
        clickCount += cookiesPerSecond;
        updateDisplay();
    }, 1000);
}

// Update the display with the latest data
function updateDisplay() {
    document.getElementById("click-count").textContent = `Clicks: ${clickCount}`;
    document.getElementById("cookies-per-second").textContent = `Cookies per second: ${cookiesPerSecond}`;
    document.getElementById("upgrade1-cost").textContent = upgrade1Cost;
    document.getElementById("upgrade2-cost").textContent = upgrade2Cost;

    // Save game data on every update
    saveGame();
}

// Load the game on page load
document.addEventListener("DOMContentLoaded", () => {
    loadGame();
    updateDisplay();
});
