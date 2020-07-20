<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title><?php echo $title; ?></title>
        <link rel="stylesheet" type="text/css" href="assets/style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@1,700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="old-paper">
            <nav class="menu">
                <ul>
                    <li><a href="index.php">Treasure Hunt</a></li>
                    <li><a href="#">Instruções</a></li>
                    <li><a href="#">Mapa</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Perguntas</a></li>
                </ul>
            </nav>
            <div id="content_area">
                <?php echo $content; ?>
            </div>

            <footer>
              <hr>
                <p>All rights reserved</p>
              <hr>
            </footer>
        </div>
    </body>
</html>
