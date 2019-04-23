
<html>
    <style>
        body{
            font-size: 40px;
        }
    </style>
    <body>
        <span><?= $_POST['nome'] ?: 'Fernanda' ?></span>
        <form action="?" method="post">
            <input type="text" name="nome" value=""/>

            <input type="submit" value="Enivar">
        </form>
    </body>
</html>