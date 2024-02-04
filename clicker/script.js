body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #111;
    color: #fff;
    overflow: hidden;
}

#game-container {
    background-color: #333;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    padding: 20px;
    text-align: center;
}

#cookie-container {
    margin-bottom: 20px;
}

#cookie {
    width: 200px;
    height: 200px;
    background-image: url('cookie.png'); /* Add your cookie image URL here */
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.1s ease;
}

#click-count,
#cookies-per-second {
    font-size: 24px;
    margin-top: 10px;
    transition: color 0.5s ease;
}

#store-container,
#achievements-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.menu {
    background-color: #555;
    border-radius: 10px;
    padding: 15px;
    width: 40%;
    margin: 10px;
}

.store-item,
.achievement {
    border: 2px solid #666;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.store-item:hover,
.achievement:hover {
    background-color: #777;
}

#golden-cookie {
    width: 50px;
    height: 50px;
    background-image: url('golden-cookie.png'); /* Add your golden cookie image URL here */
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    transition: opacity 0.5s ease;
}

.notification-box {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    transition: top 0.5s ease, opacity 0.5s ease;
    pointer-events: none;
    text-align: center;
}

.notification-box.active {
    top: 2%;
    opacity: 1;
}

.notification-box .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.notification-box .description {
    margin-bottom: 5px;
}

.dark-mode {
    background-color: #111;
    color: #fff;
}
