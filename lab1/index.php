<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dalhousie Forum</title>
</head>

<body>
    <nav>
        <a href="index.php">
            <!-- Made by myself nothing to source -->
            <img src="img/peacem.png" alt="logo" height="50">
        </a>
    </nav>
    <h1>I'm not a good programmer!</h1>
    <p>Hey my name is Mirgani Kheir but you can call me Mir. What can I call you?</p>
    <form>
        <label for="first-name">First name</label>
        <input type="text" id="infirst-name" name="first-name" required><br>
        <button type="submit" id="name-button">Click here</button>
    </form>

    <script>
        var button = document.getElementById("name-button");
        button.addEventListener("click", function() {
            var fname = document.getElementById("infirst-name").value;
            alert("Hello " + fname + " nice to meet you!");
        });
    </script>
</body>