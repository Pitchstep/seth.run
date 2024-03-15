function generateUniqueCode() {
    return Math.random().toString(36).substring(2, 8);
}

function saveNote() {
    const noteTitle = document.getElementById('noteTitle').value;
    const noteContent = document.getElementById('noteContent').value;

    if (noteTitle.trim() !== '' || noteContent.trim() !== '') {
        const uniqueCode = generateUniqueCode();
        const note = {
            title: noteTitle,
            content: noteContent
        };

        localStorage.setItem(uniqueCode, JSON.stringify(note));
        copyToClipboard(uniqueCode);
        showNotification(`Your note ID ${uniqueCode} has been copied to your clipboard!`);
    } else {
        showNotification('There isnt anything to save yet, write something!');
    }
}

function loadNote() {
    const loadCodeInput = document.getElementById('loadCodeInput');
    const uniqueCode = loadCodeInput.value.trim();

    if (uniqueCode !== '') {
        const storedNote = localStorage.getItem(uniqueCode);

        if (storedNote) {
            const note = JSON.parse(storedNote);
            document.getElementById('noteTitle').value = note.title;
            document.getElementById('noteContent').value = note.content;
            updateWordCount(); // Update word count when loading note
            showNotification('Note loaded!');
        } else {
            showNotification('That note ID doesnt seem to exist!');
        }
    } else {
        showNotification('That isnt a valid note ID!');
    }
}

function showNotification(message) {
    const notificationElement = document.getElementById('notification');
    const wordCountElement = document.getElementById('wordCount');

    // Check if notification is already shown
    if (notificationElement.classList.contains('show-notification')) {
        // Update message and add pulse effect
        notificationElement.textContent = message;
        notificationElement.classList.add('word-pulse');

        // Remove pulse effect after short delay
        setTimeout(() => {
            notificationElement.classList.remove('word-pulse');
        }, 300);

    } else {
        // Set message and show notification
        notificationElement.textContent = message;
        notificationElement.classList.add('show-notification');
    }

    // Hide notification after 5 seconds
    setTimeout(() => {
        notificationElement.classList.remove('show-notification');
    }, 5000);
}

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

function updateWordCount() {
    const content = document.getElementById('noteContent').value;
    const wordCount = content.split(/\s+/).filter(word => word !== '').length;
    document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
    document.title = `Notepad | Words: ${wordCount}`; // Update document title with word count
}
