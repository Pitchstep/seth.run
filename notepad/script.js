body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    max-width: 80%;
    width: 100%;
    background-color: #111;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    text-align: center;
}

h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
}

#noteTitle {
    font-family: 'Montserrat', sans-serif;
    font-size: calc(1vw + 1vh);
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #444;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #222;
    color: #fff;
}

#noteContent {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #444;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #222;
    color: #fff;
}

#noteContent {
    font-family: 'Arial', sans-serif;
    min-height: 150px;
    resize: vertical;
    overflow: auto;
}

#saveButton {
    margin-top: 10px;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

#loadCodeBtn {
    margin-top: 10px;
    padding: 15px;
    background-color: #5539cc;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

#loadCode {
    margin-top: 10px;
}

#loadCodeInput {
    width: calc(100% - 10px);
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #444;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #222;
    color: #fff;
}

.notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease-in-out; /* Smooth transition */
}

.show-notification {
    opacity: 1;
}

.notification-title {
    font-size: 1.2em; /* Slightly larger font size */
    font-weight: bold; /* Bold font weight */
}

#wordCount {
    font-size: 16px;
    margin-top: 10px;
}

#charCount {
    font-size: 13px;
    margin-top: 8px;
}

/* Media query for responsiveness */
@media only screen and (max-width: 600px) {
    .container {
        max-width: 90%;
    }
}
