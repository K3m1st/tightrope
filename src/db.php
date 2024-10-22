<?php
// Database connection credentials
$servername = "localhost";  // Server name (in most cases localhost)
$username = "infost490f2408_infost490f2408";  // Your MySQL username
$password = "490C4pst0n3!121524";  // Your MySQL password
$dbname = "infost490f2408_tightrope";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
