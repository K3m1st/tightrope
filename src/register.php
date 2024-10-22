<?php
// Include the database connection
include 'db.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get data from POST request
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email already exists
    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($checkEmail);
    if ($result->num_rows > 0) {
        // If the email already exists, return an error response
        echo json_encode(["error" => "Email already exists"]);
    } else {
        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Insert the user data into the database
        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            // If registration is successful, return a success message
            echo json_encode(["message" => "User registered successfully"]);
        } else {
            // If there's an error inserting into the database, return an error message
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
    }
} else {
    // If the request method is not POST, return an error
    echo json_encode(["error" => "Invalid request method"]);
}

// Close the database connection
$conn->close();
?>
