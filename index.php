<!DOCTYPE html>
<html>
<head>
  <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
  <link rel="stylesheet" media="(min-width: 700px)" href="fullscreen.css">
  <link rel="stylesheet" media="(max-width:800px)" href="mobile.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet">
  <script src="jquery-3.4.1.min.js"></script>
  <title> how are you feeling today? </title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>">
</head>

<body>

  <div id="text-input">
    <div id="cloud-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 190">
        <path id="Union_1" data-name="Union 1" d="M50.623,190v-.327A56.515,56.515,0,0,1,0,133.655c0-31.118,25.422-56.344,56.78-56.344A57.378,57.378,0,0,1,69.9,78.822C72.335,34.905,111.166,0,158.711,0c48.666,0,88.2,36.571,88.923,81.944a56.979,56.979,0,0,1,22.585-4.633c31.36,0,56.781,25.225,56.781,56.344,0,30.892-25.052,55.978-56.1,56.341v0Z"/>
      </svg>
    </div>

    <div id="cloud-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 190">
        <path id="Union_1" data-name="Union 1" d="M50.623,190v-.327A56.515,56.515,0,0,1,0,133.655c0-31.118,25.422-56.344,56.78-56.344A57.378,57.378,0,0,1,69.9,78.822C72.335,34.905,111.166,0,158.711,0c48.666,0,88.2,36.571,88.923,81.944a56.979,56.979,0,0,1,22.585-4.633c31.36,0,56.781,25.225,56.781,56.344,0,30.892-25.052,55.978-56.1,56.341v0Z"/>
      </svg>
    </div>

    <p id="hello"> how are you feeling today? </p>

    <form id="input" action="/feeling_query.php">
      <input type="text" placeholder="type here + press enter" id="inputbox" name="feeling">
    </form>

  </div>

  <div id="feelings">

    <?php
    include 'important.php';

    $conn = new mysqli($servername, $username, $password, $databasename);

    $sql = "SELECT feeling,datum FROM feelings ORDER BY datum DESC";
    $result = $conn->query($sql);

    $delay = 0;

    while($row = $result->fetch_assoc()) {
      //$delay += 0.08;
      echo("<div class='circle' style='transition-delay:".strval($delay) . "s'>" . $row['feeling'] . "</div>");
    }
    ?>


  </div>

</body>

<script src="/scripts.js"></script>

</html>
