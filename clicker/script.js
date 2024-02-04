let clickCount = 0;
let cookiesPerSecond = 0;
let clickMultiplier = 1;
let autoClickerCount = 0;
let achievements = [];
let saveData;
let goldenCookieInterval;

function clickCookie() {
    clickCount += clickMultiplier;
    updateClickCount();
    checkGoldenCookie();
    animateCookieClick();
}

function animateCookieClick() {
    const cookie = document.getElementById('cookie');
    cookie.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cookie.style.transform = 'scale(1)';
    }, 100);
}

function updateClickCount() {
    const clickCountElement = document.getElementById('click-count');
    clickCountElement.innerText = 'Clicks: ' + clickCount;
    checkAchievements();
}

function buyUpgrade(upgradeType, cost) {
    if (clickCount >= cost) {
        clickCount -= cost;
        if (upgradeType === 'clickMultiplier') {
            clickMultiplier *= 2;
        } else if (upgradeType === 'autoClicker') {
            autoClickerCount++;
            setInterval(autoClick, 1000);
        } else if (upgradeType === 'timeWarp') {
            clickCount += 1000;
        }
        updateClickCount();
        updateCookiesPerSecond();
    }
}

function autoClick() {
    clickCount += clickMultiplier * autoClickerCount;
    updateClickCount();
}

function updateCookiesPerSecond() {
    const cookiesPerSecondElement = document.getElementById('cookies-per-second');
    cookiesPerSecond = autoClickerCount * clickMultiplier;
    cookiesPerSecondElement.innerText = 'Cookies per second: ' + cookiesPerSecond;
}

function checkAchievements() {
    if (clickCount >= 10 && !achievements.includes('Achievement 1')) {
        achievements.push('Achievement 1');
        showNotification('Achievement Unlocked!', 'Achievement 1');
    }
    // Add more complex achievement conditions as needed
    updateAchievements();
}

function updateAchievements() {
    const achievementsContainer = document.getElementById('achievements-container');
    achievementsContainer.innerHTML = '<h2>Achievements</h2>';
    for (const achievement of achievements) {
        const achievementElement = document.createElement('div');
        achievementElement.classList.add('achievement');
        achievementElement.innerText = achievement;
        achievementsContainer.appendChild(achievementElement);
    }
}

function showNotification(title, description) {
    const notificationBox = document.getElementById('notification-box');
    const titleElement = notificationBox.querySelector('.title');
    const descriptionElement = notificationBox.querySelector('.description');

    titleElement.innerText = title;
    descriptionElement.innerText = description;

    notificationBox.classList.add('active');
    setTimeout(() => {
        notificationBox.classList.remove('active');
    }, 3000);
}

function checkGoldenCookie() {
    const goldenCookie = document.getElementById('golden-cookie');
    if (Math.random() < 0.02) { // 2% chance for a golden cookie to appear
        goldenCookie.style.display = 'block';
        setTimeout(() => {
            goldenCookie.style.display = 'none';
        }, 5000); // Golden cookie disappears after 5 seconds
    }
}

function saveGame() {
    saveData = {
        clickCount,
        cookiesPerSecond,
        clickMultiplier,
        autoClickerCount,
        achievements
    };
    showNotification('Game saved!', 'You can load your save file by clicking the Load Game button.');
}

function loadGame() {
    if (saveData) {
        clickCount = saveData.clickCount;
        cookiesPerSecond = saveData.cookiesPerSecond;
        clickMultiplier = saveData.clickMultiplier;
        autoClickerCount = saveData.autoClickerCount;
        achievements = saveData.achievements;
        updateClickCount();
        updateCookiesPerSecond();
        updateAchievements();
        showNotification('Game loaded!', 'Progress restored!');
    } else {
        showNotification('No saved game found.', 'Did you refresh the page?');
    }
}

setInterval(function () {
    clickCount += cookiesPerSecond;
    updateClickCount();
}, 1000);
