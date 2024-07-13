var buttonEnabled = true;
// function to play sound
function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // reset sound to beginning (breaks on iPhone devices)
        sound.play();
    }
}

// function to change the volume of all audio elementss
function changeVolume(volume) {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.volume = volume;
    });
}

document.getElementById('generate-btn').addEventListener('click', function() {
    if (!buttonEnabled) {
        return; // do nothing if the button is disabled
    }

    // disable the button to prevent multiple clicks
    buttonEnabled = false;
    setTimeout(function() {
        buttonEnabled = true; // enable the button after 3 seconds
    }, 1200);

    // RNG!!!!!
    var randomNumber = Math.floor(Math.random() * 100000) + 1;
    randomNumber !== null ? randomNumber : Math.floor(Math.random() * 100000) + 1;

    // nextNumber currently has no say since i removed the code for console command.
    // technically, it still rolls a number if nextNumber is set, however there is no way to set it.
    
    // display the number with pop-up animation
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // clear previous content
    var numberElement = document.createElement('b');
    numberElement.classList.add('pop-up');
    numberElement.textContent = randomNumber;
    resultElement.appendChild(numberElement);
    
    // determine rarity based on the generated number
    var rarity;
    var rarityColor;
    var specialRarityTriggered = false; // flag to track if a special rarity is triggered
    
    // MEME RARITIES
    if (randomNumber === 13) {
        rarity = 'Unlucky';
        rarityColor = '#ff0000';
        playSound('unlucky-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 7) {
        rarity = 'Fidison Incarnate';
        rarityColor = '#FA8CE6';
        playSound('drip');
        specialRarityTriggered = true;
    } else if (randomNumber === 69) {
        rarity = 'Nice ;)';
        rarityColor = '#ff4d00';
        playSound('nice-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 404) {
        rarity = 'Not Found';
        rarityColor = '#ffabe0';
        playSound('404-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 666) {
        rarity = 'Demonic';
        rarityColor = '#800000';
        playSound('demonic-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 777) {
        rarity = 'Lucky Sevens!';
        rarityColor = '#fffb00';
        playSound('luckysevens-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 911) {
        rarity = 'No emergencies 😎';
        rarityColor = '#2200ff';
        playSound('911-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 6969) {
        rarity = 'Super Nice';
        rarityColor = '#2200ff';
        playSound('nice-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 1031) {
        rarity = '👻';
        rarityColor = '#7100c7';
        playSound('spooky-sound');
        specialRarityTriggered = true;
    } else if (randomNumber === 123) {
        rarity = '🎶 My baby dont mess around... 🎶';
        rarityColor = '#00c788';
        playSound('onetwothree-sound');
        specialRarityTriggered = true;
    // MEME RARITIES

    } else if (randomNumber <= 1) {
        rarity = 'Ultra Mythical';
        rarityColor = '#FFD700'; // lighter yellow (gold?)
        playSound('ultra-sound');

    } else if (randomNumber <= 250) {
        rarity = 'Super Mythical';
        rarityColor = '#FA8CE6'; // lighter pink
        playSound('super-sound');

    } else if (randomNumber <= 2500) {
        rarity = 'Mystical';
        rarityColor = '#FF69B4'; // pink
        playSound('mystical-sound');

    } else if (randomNumber <= 10000) {
        rarity = 'Legendary';
        rarityColor = '#FFD700'; // gold-ish
        playSound('legendary-sound');

    } else if (randomNumber <= 25000) {
        rarity = 'Epic';
        rarityColor = '#800080'; // purple
        playSound('epic-sound');

    } else if (randomNumber <= 50000) {
        rarity = 'Rare';
        rarityColor = '#0000FF'; // dark blue
        playSound('rare-sound');

    } else if (randomNumber >= 100000) {
        rarity = 'Too Common?';
        rarityColor = '#FFFFFF'; // white
        playSound('common-sound');
    } else {
        rarity = 'Common';
        rarityColor = '#FFFFFF'; // white again??
        playSound('common-sound');
    }
    
    // play original rarity sound only if no special rarity is triggered
    if (!specialRarityTriggered) {
        playSound('original-rarity-sound');
    }
    
    // update text with rarity after a delay
    setTimeout(function() {
        var rarityElement = document.createElement('div');
        rarityElement.innerHTML = '<b class="pop-up" style="text-transform: uppercase; font-style: 680; font-size: 14px; color: ' + rarityColor + ';">' + rarity + '</b>';
        resultElement.appendChild(rarityElement);
    }, 200); // .2 sec delay for rarity popup
});

// set the volume of all audio elements to 0.04 when the page loads. sorry about that!!
window.addEventListener('load', function() {
    changeVolume(0.04);
});
