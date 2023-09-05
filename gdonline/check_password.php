<?php
// Define the correct password
$correctPassword = "the_c_is_sacred";

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the password submitted in the form
    $enteredPassword = $_POST["password"];

    // Check if the entered password matches the correct password
    if ($enteredPassword === $correctPassword) {
        // Password is correct, grant access
        echo "<h1>Access Granted!</h1>";
        echo "<p>You can now access the protected content.</p>";
    } else {
        // Password is incorrect, deny access
        echo "<h1>Access Denied!</h1>";
        echo "<p>The entered password is incorrect. Please try again.</p>";
    }
}
?>
