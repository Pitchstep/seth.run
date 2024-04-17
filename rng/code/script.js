var buttonEnabled = true;

// Function to play sound
function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // Reset sound to beginning
        sound.play();
    }
}

// Function to change the volume of all audio elements
function changeVolume(volume) {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.volume = volume;
    });
}

// Function to convert hexadecimal color to RGB
function getRGBColor(hexColor) {
    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16);
    return { r: r, g: g, b: b };
}

// Function to calculate a darker shade of a color
function calculateDarkerColor(rgb) {
    var factor = 0.1; // Adjust this factor to control the darkness of the shade
    var r = Math.round(rgb.r * factor);
    var g = Math.round(rgb.g * factor);
    var b = Math.round(rgb.b * factor);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// listen for console input
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        var input = document.getElementById('console-input').value;
        executeCommand(input);
        document.getElementById('console-input').value = ''; // Clear the input field
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
    var randomNumber = Math.floor(Math.random() * 10000) + 1;

    // display the number with pop-up animation
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous content
    var numberElement = document.createElement('b');
    numberElement.classList.add('pop-up');
    numberElement.textContent = randomNumber;
    resultElement.appendChild(numberElement);
    
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
    } else {
        rarity = 'Common';
        rarityColor = '#FFFFFF'; // white again??
        playSound('common-sound');
    }
    
    // Update text with random number and rarity after a delay
    setTimeout(function() {
        var resultElement = document.getElementById('result');

        // Define the RGB values of the rarity color
        var rgb = getRGBColor(rarityColor);

        // Calculate the darker shade of the rarity color
        var darkerColor = calculateDarkerColor(rgb);

// Create a div element for the rarity text
var rarityElement = document.createElement('div');
var rarityText = '';
for (var i = 0; i < rarity.length; i++) {
    rarityText += '<span style="color: ' + rarityColor + ';">' + rarity[i] + '</span>';
}
rarityElement.innerHTML = '<b style="text-transform: uppercase; font-style: 500; font-size: 14px;">' + rarityText + '</b>';

// Add pop-up animation to the rarity text
rarityElement.firstChild.classList.add('pop-up');

resultElement.appendChild(rarityElement);


        // Fade in background color
        document.body.style.transition = 'none'; // Disable transitions for the initial setting
        document.body.style.backgroundColor = darkerColor; // Set the darker shade as the background color

        // Reset background color after a short delay
        setTimeout(function() {
            // Fade out background color
            document.body.style.transition = 'background-color 0.5s';
            document.body.style.backgroundColor = 'black'; // Reset the background color
        }, 500); // Adjust the duration of the pulse effect (500ms = 0.5 seconds)
    }, 500); // .5 sec delay for displaying the number and rarity
});

// Set the volume of all audio elements to 0.4 when the page loads
window.addEventListener('load', function() {
    changeVolume(0.04);
});
