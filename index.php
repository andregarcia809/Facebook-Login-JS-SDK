<?php

session_start();

if (!isset($_SESSION['userID']) || isset($_SESSION['email'])) {
    // needs to be handle in index.php , once app is no longer indexed in localhost:5500
    header('location: index.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row text-center">
            <div class="col-md-3">
                <img src="<?php echo $_SESSION['picture']?>" alt="user">
            </div>
            <div class="col-md-9">
                <h5>User ID: <?php echo $_SESSION['UserID']?></h5>
                <h5>User Name: <?php echo $_SESSION['name']?></h5>
                <h5>User Email: <?php echo $_SESSION['email']?></h5>
            </div>
        </div>
    </div>
</body>

</html>