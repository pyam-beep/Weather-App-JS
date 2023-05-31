<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather | Forecast</title>
    <link rel="stylesheet" href="api.css">
</head>
<body>
    <?php include 'data.php';?>
    <div class="main-box">
        <div class="content-box">
            <div class="heading-box">
                <h2><span class="A">WEA</span>THER <span class="A"> A</span>PI</h2>
            </div>
            <div class="weather-img">
                <img src="clouds.png" alt="Weather" width="150px" height="150px">
            </div>
            <div class="time-zone">
                <p id="timed"></p>
            </div>
            <form class="search-bar" id="form">
                <input type="text" placeholder="Search for City/Place" name="q" id="city">
                <button type="submit"><img src="search.png"></button>
            </form>
            <div class="temperature-display" id="temperature">
                <div class="temperature-img">
                    <img src="weather-rainy.png" alt="rainy" width="100px" height="100px" id="weather-icons" transtion=".4s ease">
                    <p class="status" id="status"></p>
                    <h1 id="location"></h1>
                    <p id="sub-location"></p>
                </div>
                <div class="degrees">
                    <h3><span id="temp-deg">20</span><span><img src="celsius (1).png" width="35px" height="35px"></span></h3>
                    <h2><span id="rain"></span><span><img src="water.png" width="35px" height="35px"></span></h2>
                </div>
                <div class="humid">
                    <h2><span id="humidity"></span><span><img src="humidity (1).png" width="35px" height="35px"></span></h2>
                    <h2><span id="wind"></span><span><img src="wind (1).png" width="40px" height="40px"></span></h2>
                </div>
            </div>
            <footer class="footer">
                <p>@Copyright 2023 | Weather Forecast</p>
            </footer>
        </div>
        <div class="content-box1">
            <p>HISTORY API</p>
            <div class="weather-container">
            <table id="weather-table">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Rain</th>
                    <th>Wind</th>
                  </tr>
                </thead>
                <tbody>
                    
                </tbody>
              </table>
            </div> 
        </div>
    </div>
    <script src="weather.js"></script>
</body>
</html>