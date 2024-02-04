function addSentence() {
    const userInput = document.getElementById('user-input');
    const storyContainer = document.getElementById('story');

    const sentence = userInput.value.trim();
    if (sentence !== '') {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = sentence;
        storyContainer.appendChild(newParagraph);

        // Clear the input
        userInput.value = '';
    }
}
