<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info | Display</title>
</head>
<body>
    <?php
        $conn = mysqli_connect("localhost", "root", "", "herald");

        $sql = "SELECT * FROM weather";

        $result = mysqli_query($conn, $sql);

        $weatherData = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $weatherData[] = $row;
        }

        $json = json_encode($weatherData);
        echo '<script>var weatherData = ' . $json . ';</script>';
        
        mysqli_close($conn)
       
    ?>
</body>
</html>