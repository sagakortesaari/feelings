<?php
include 'important.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $databasename);

$feeling = htmlentities($_REQUEST['feeling']);

if(!empty($feeling)) {
  $sql = "INSERT INTO feelings (feeling, datum) VALUES ("."'".$feeling."'".", NOW())";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  echo($feeling);
}



?>
