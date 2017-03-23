<html>
  <head>
    <title>debug</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
  </head>
	<body>
    <?php
    $dir = opendir("./");
    $count = 0;
    while (($filename = readdir($dir)) !== false )
    {
        if (strpos($filename,'.js') !== false)
        {
            $filesnames[] = $filename;
            $count++;
        }
    }
    closedir($dir);
    if($count<=0)
      return;
    sort($filesnames);
    foreach ($filesnames as $name)
    {
        $aurl = "<p><a href=\"" . $name . "\">" . $name . "</a></p>";
        echo $aurl . "<br/>";
    }
    ?>
    </body>
</html>