<!DOCTYPE html>
<html lang="en">

<head>
    <title>To-Do List</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/jQuery/todo.js"></script>
</head>

<body>
    <?php
    
    // DB Connection
    $servername = "localhost";
    $username = "sentinal";
    $password = "$589SZbq2BP5ND9$b";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        echo "Failed";
    } else {
        echo "Connected successfully";
    }

    ?>
</body>

</html>