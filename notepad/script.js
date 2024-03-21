document.addEventListener("DOMContentLoaded", function() {
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    const wordCount = document.getElementById('wordCount');
    const saveButton = document.getElementById('saveButton');
    const loadButton = document.getElementById('loadButton');
    const deleteButton = document.getElementById('deleteButton');
    const loadCodeInput = document.getElementById('loadCodeInput');
    const notification = document.getElementById('notification');
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');

    saveButton.addEventListener('click', saveNote);
    loadButton.addEventListener('click', loadNote);
    deleteButton.addEventListener('click', showConfirmationModal);
    confirmDelete.addEventListener('click', deleteNote);
    cancelDelete.addEventListener('click', hideConfirmationModal);
    noteContent.addEventListener('input', updateWordCount);

    function saveNote() {
        const title = noteTitle.value.trim();
        const content = noteContent.value.trim();

        if (title !== '' || content !== '') {
            const uniqueCode = generateUniqueCode();
            const note = {
                title: title,
                content: content
            };

            localStorage.setItem(uniqueCode, JSON.stringify(note));
            copyToClipboard(uniqueCode);
            showNotification('ID Copied', `"${uniqueCode}" has been copied to your clipboard!`);
        } else {
            showNotification('Nothing to Save', 'There isn\'t anything to save yet, write something!');
        }
    }

    function loadNote() {
        const uniqueCode = loadCodeInput.value.trim();

        if (uniqueCode !== '') {
            const storedNote = localStorage.getItem(uniqueCode);

            if (storedNote) {
                const note = JSON.parse(storedNote);
                noteTitle.value = note.title;
                noteContent.value = note.content;
                updateWordCount();
                showNotification('Note Loaded', 'Your note was loaded!');
            } else {
                showNotification('ID Not Found', 'That note ID doesn\'t seem to exist!');
            }
        } else {
            showNotification('Invalid ID', 'Please provide a valid note ID to load.');
        }
    }

    function deleteNote() {
        const uniqueCode = loadCodeInput.value.trim();
        localStorage.removeItem(uniqueCode);
        noteTitle.value = '';
        noteContent.value = '';
        updateWordCount();
        showNotification('Note Deleted', 'The note has been successfully deleted.');
        hideConfirmationModal();
    }

    function showConfirmationModal() {
        confirmationModal.style.display = 'block';
    }

    function hideConfirmationModal() {
        confirmationModal.style.display = 'none';
    }

    function showNotification(title, message) {
        notification.innerHTML = `<div class="notification-title"><b>${title}</b></div>${message}`;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }

    function generateUniqueCode() {
        return Math.random().toString(36).substring(2, 8);
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
        const content = noteContent.value.trim();
        const wordCount = content.split(/\s+/).filter(word => word !== '').length;
        wordCount.textContent = `Words: ${wordCount}`;
    }
});
