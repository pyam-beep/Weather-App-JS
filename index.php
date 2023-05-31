<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data | Index</title>
</head>
<body>
    <?php

    $conn = mysqli_connect("localhost", "root", "", "herald");

    $json_data = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=Isle%20Of%20Wight&appid=588731448521733062155de0d89e383a&&units=metric");

    $data = json_decode($json_data, true);

    $city = $data['name'];
    $temperature = $data['main']['temp'];
    $humidity = $data['main']['humidity'];
    $wind = $data['wind']['speed'];

    if(array_key_exists('rain', $data)){
        $rain = $data['rain']['1h'];
    }
    else{
        $rain = "-";
    }

    $sql = "INSERT INTO weather(City, Temperature, Humidity, Wind, Rain)
    VALUES ('$city', '$temperature', '$humidity', '$wind', '$rain')"; 

    mysqli_query($conn, $sql);

    mysqli_close($conn);
    ?>
</body>
</html>