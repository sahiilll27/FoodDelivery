<!-- filepath: /c:/Users/ELD/Desktop/Food_Delivery/submit_contact.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Here you can add code to save the data to a database or send an email
        // For demonstration, we'll just display a success message
        echo "<h2>Thank you, $name!</h2>";
        echo "<p>Your message has been received. We will get back to you at $email soon.</p>";
    } else {
        echo "<h2>Error</h2>";
        echo "<p>Please fill in all fields.</p>";
    }
} else {
    echo "<h2>Error</h2>";
    echo "<p>Invalid request method.</p>";
}
?>