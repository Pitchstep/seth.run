var buttonEnabled = true;
var nextNumber = null;

// function to play sound
function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // reset sound to beginning (breaks on iPhone devices)
        sound.play();
    }
}

// function to change the volume of all audio elements
function changeVolume(volume) {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.volume = volume;
    });
}

// listen for console input
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        var input = document.getElementById('console-input').value;
        executeCommand(input);
        document.getElementById('console-input').value = ''; // clear the input field
    }
});

document.getElementById('generate-btn').addEventListener('click', function() {
    if (!buttonEnabled) {
        return; // do nothing if the button is disabled
    }

    // disable the button to prevent multiple clicks
    buttonEnabled = false;
    setTimeout(function() {
        buttonEnabled = true; // enable the button after 3 seconds
    }, 1000);

    // use the nextNumber if set, otherwise generate a random number
    var randomNumber = nextNumber !== null ? nextNumber : Math.floor(Math.random() * 10000) + 1;
    nextNumber = null; // reset nextNumber after using it

    // determine rarity based on the generated number
    var rarity;
    var rarityColor;
    if (randomNumber <= 1) {
        rarity = 'The Mythical One';
        rarityColor = '#FFD700'; // lighter yellow (gold?)
        playSound('mythicalone-sound');
    } else if (randomNumber <= 50) {
        rarity = 'RNGesus Incarnate';
        rarityColor = '#FA8CE6'; // lighter pink
        playSound('rngesus-sound');
    } else if (randomNumber <= 250) {
        rarity = 'Mythical';
        rarityColor = '#FF69B4'; // pink
        playSound('mythical-sound');
    } else if (randomNumber <= 1000) {
        rarity = 'Legendary';
        rarityColor = '#FFD700'; // gold-ish
        playSound('legendary-sound');
    } else if (randomNumber <= 2500) {
        rarity = 'Epic';
        rarityColor = '#800080'; // purple
        playSound('epic-sound');
    } else if (randomNumber <= 5000) {
        rarity = 'Rare';
        rarityColor = '#0000FF'; // dark blue
        playSound('rare-sound');
    } else if (randomNumber >= 10000) {
        rarity = 'Too Common?';
        rarityColor = '#FFFFFF'; // white
        playSound('common-sound');
    } else if (randomNumber >= 10001) {
        rarity = 'Cheater! Cheater!';
        rarityColor = '#FFFFFF'; // white
        playSound('glitch-sound');
    } else {
        rarity = 'Common';
        rarityColor = '#FFFFFF'; // white again??
        playSound('common-sound');
    }

    // Display the rolled number along with its rarity and apply the corresponding animation
    displayResult(randomNumber, rarity);
});

// Function to apply animation based on rarity
function applyRarityAnimation(rarity) {
    const resultElement = document.getElementById('result');
    resultElement.className = 'result'; // Reset classes

    switch(rarity) {
        case 'The Mythical One':
            resultElement.classList.add('mythicalone-animation');
            break;
        case 'RNGesus Incarnate':
            resultElement.classList.add('rngesus-animation');
            break;
        case 'Mythical':
            resultElement.classList.add('mythical-animation');
            break;
        case 'Legendary':
            resultElement.classList.add('legendary-animation');
            break;
        case 'Epic':
            resultElement.classList.add('epic-animation');
            break;
        case 'Rare':
            resultElement.classList.add('rare-animation');
            break;
        case 'Too Common?':
        case 'Cheater! Cheater!':
        case 'Common':
            resultElement.classList.add('common-animation');
            break;
        default:
            break;
    }
}

// Function to display the rolled number with rarity
function displayResult(number, rarity) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous content
    const numberElement = document.createElement('b');
    numberElement.textContent = number;
    resultElement.appendChild(numberElement);

    applyRarityAnimation(rarity);
}

// Set the volume of all audio elements to 0.04 when the page loads.
window.addEventListener('load', function() {
    changeVolume(0.04);
});

// Disable hotkeys for inspect element & to simulate a right click without the mouse
document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};
