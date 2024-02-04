let clickCount = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let upgrade1Level = 1;
let upgrade2Level = 1;
let upgrade1Cost = 10;
let upgrade2Cost = 20;

function loadGame() {
    if (localStorage.getItem("clickCount")) {
        clickCount = parseInt(localStorage.getItem("clickCount"));
        cookiesPerClick = parseInt(localStorage.getItem("cookiesPerClick"));
        cookiesPerSecond = parseInt(localStorage.getItem("cookiesPerSecond"));
        upgrade1Level = parseInt(localStorage.getItem("upgrade1Level")) || 1;
        upgrade2Level = parseInt(localStorage.getItem("upgrade2Level")) || 1;
        upgrade1Cost = parseInt(localStorage.getItem("upgrade1Cost"));
        upgrade2Cost = parseInt(localStorage.getItem("upgrade2Cost"));
        updateDisplay();
    }
}

function saveGame() {
    localStorage.setItem("clickCount", clickCount);
    localStorage.setItem("cookiesPerClick", cookiesPerClick);
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
    localStorage.setItem("upgrade1Level", upgrade1Level);
    localStorage.setItem("upgrade2Level", upgrade2Level);
    localStorage.setItem("upgrade1Cost", upgrade1Cost);
    localStorage.setItem("upgrade2Cost", upgrade2Cost);
}

function clickCookie() {
    clickCount += cookiesPerClick;
    updateDisplay();
}

function buyUpgrade(upgradeNumber) {
    let upgradeCost, upgradeLevel;
    switch (upgradeNumber) {
        case 1:
            upgradeCost = upgrade1Cost;
            upgradeLevel = upgrade1Level;
            break;
        case 2:
            upgradeCost = upgrade2Cost;
            upgradeLevel = upgrade2Level;
            break;
        default:
            return;
    }

    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        upgradeCost += 10 * upgradeLevel;

        switch (upgradeNumber) {
            case 1:
                cookiesPerClick *= 2;
                upgrade1Level++;
                break;
            case 2:
                cookiesPerSecond += 5;
                startCookieProduction();
                upgrade2Level++;
                break;
        }

        updateDisplay();
    }
}

function startCookieProduction() {
    setInterval(() => {
        clickCount += cookiesPerSecond;
        updateDisplay();
    }, 1000);
}

function showTooltip(upgradeNumber) {
    let tooltip = document.getElementById("tooltip");
    let upgradeDescription;

    switch (upgradeNumber) {
        case 1:
            upgradeDescription = `Double your click value. Level: ${upgrade1Level}`;
            break;
        case 2:
            upgradeDescription = `Generate 5 cookies per second. Level: ${upgrade2Level}`;
            break;
        default:
            upgradeDescription = "";
    }

    tooltip.innerHTML = upgradeDescription;
    tooltip.style.display = "block";

    // Position the tooltip relative to the button
    let button = document.querySelector(`button[data-upgrade="${upgradeNumber}"]`);
    let rect = button.getBoundingClientRect();
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px";
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
}

function hideTooltip() {
    let tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

function updateDisplay() {
    document.getElementById("click-count").textContent = `Clicks: ${clickCount}`;
    document.getElementById("cookies-per-second").textContent = `Cookies per second: ${cookiesPerSecond}`;
    document.getElementById("upgrade1-cost").textContent = upgrade1Cost;
    document.getElementById("upgrade2-cost").textContent = upgrade2Cost;

    // Save game data on every update
    saveGame();
}

document.addEventListener("DOMContentLoaded", () => {
    loadGame();
    updateDisplay();
});
