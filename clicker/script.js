let clickCount = 0;
let cookiesPerSecond = 0;

function clickCookie() {
    clickCount++;
    updateClickCount();
}

function updateClickCount() {
    document.getElementById('click-count').innerText = `Clicks: ${clickCount}`;
}

function buyUpgrade(upgradeType, cost) {
    if (clickCount >= cost) {
        clickCount -= cost;
        updateClickCount();
        if (upgradeType === 'clickMultiplier') {
            // Implement upgrade logic
        } else if (upgradeType === 'autoClicker') {
            // Implement upgrade logic
        } else if (upgradeType === 'timeWarp') {
            // Implement upgrade logic
        }
    } else {
        showNotification('Insufficient clicks!');
    }
}

function showNotification(title, description = '') {
    const notificationBox = document.getElementById('notification-box');
    notificationBox.querySelector('.title').innerText = title;
    notificationBox.querySelector('.description').innerText = description;
    notificationBox.classList.add('active');
    setTimeout(() => {
        notificationBox.classList.remove('active');
    }, 3000);
}

function saveGame() {
    // Implement save game logic
    showNotification('Game saved!');
}

function loadGame() {
    // Implement load game logic
    showNotification('Game loaded!');
}

// Add more functionality as needed
