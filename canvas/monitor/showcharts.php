<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>canvas & webgl 历史数据图表展示</title>

    <script type="text/javascript" src="../Highcharts/js/jquery.min.js"></script>
    <style type="text/css">
        ${demo.css}
    </style>
    <?php

    $con = mysql_connect("qdm114751488.my3w.com", "qdm114751488", "309341935");
    if (!$con) {
        echo('Could not connect: '.mysql_error());
    }
    mysql_select_db("qdm114751488_db", $con);

    /*
    //local test
    $con = mysql_connect("localhost", "root", "root");
    if (!$con) {
        echo('Could not connect: '.mysql_error());
    }
    mysql_select_db("u_wsd", $con);
    */

    $ttsjxx = $_POST[ttsjxx];
    $ttfzxx = $_POST[ttfzxx];

    $cssjArray=array();
    $csylArray=array();
    $fpsArray=array();

    if($ttfzxx=="tbs3")
        $sqlcssj= "SELECT distinct(cssj) FROM tt_monitor WHERE sjxx='".$ttsjxx."' and fzxx='".$ttfzxx."' and csbb like 'tbs_core_%.apk' ORDER BY cssj DESC  LIMIT 0,10;";
    else
        $sqlcssj= "SELECT distinct(cssj) FROM tt_monitor WHERE sjxx='".$ttsjxx."' and fzxx='".$ttfzxx."' ORDER BY cssj DESC  LIMIT 0,10;";
    //echo "sqlcssj:".$sqlcssj;

    $resultcssj = mysql_query($sqlcssj);
    while($rowcssj = mysql_fetch_array($resultcssj))
    {
        $cssjArray[]=$rowcssj['cssj'];
    }

    $sqlcsyl= "SELECT csyl FROM tt_monitor WHERE cssj='".$cssjArray[0]."' ORDER BY id ";

    //echo "sqlcsyl:".$sqlcsyl;

    $resultcsyl = mysql_query($sqlcsyl);
    while($rowcsyl = mysql_fetch_array($resultcsyl))
    {
        $csylArray[]=$rowcsyl['csyl'];
    }

    $csylCount=0;
    foreach($csylArray as $csylValue)
    {
        $sqlfps = "SELECT avgfps FROM tt_monitor WHERE csyl='".$csylValue."' and sjxx='".$ttsjxx."' and fzxx='".$ttfzxx."' ORDER BY cssj DESC  LIMIT 0,10;";
        $resultfps = mysql_query($sqlfps);
        $instancefps = array();
        while($rowfps = mysql_fetch_array($resultfps))
        {
            $instancefps[]=$rowfps['avgfps'];
        }
        $fpsArray[$csylCount]=$instancefps;
        $csylCount++;
    }

    /*
    echo "<br> cssjArray:";
    print_r($cssjArray);
    echo "<br> csylArray:";
    print_r($csylArray);
    echo "<br> fpsArray:";
    print_r($fpsArray);

    echo "<br>"."cssjArray count".count($cssjArray)."<br>";
    echo "csylArray count".count($csylArray)."<br>";
    echo "fpsArray count".count($fpsArray)."<br>";
    echo "csylCount count".$csylCount."<br>";
    echo "fpsArray[0] count".count($fpsArray[0])."<br>";
    */

    mysql_close($con);
    ?>

    <script type="text/javascript">
        $(function () {
            var cssjArray = <?php echo json_encode($cssjArray) ?>;
            var csylArray = <?php echo json_encode($csylArray) ?>;
            var fpsArray = <?php echo json_encode($fpsArray) ?>;

            var ttsjxx = <?php echo json_encode($ttsjxx) ?>;
            var ttfzxx = <?php echo json_encode($ttfzxx) ?>;

            $('#container').highcharts({
                title: {
                    text: 'Canvas & WebGL Performance('+ttsjxx+'-'+ttfzxx+')',
                    x: -20 //center
                },
                xAxis: {
                    categories:cssjArray
                },
                yAxis: {
                    title: {
                        text: 'FPS'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: ''
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
            });

            var chart = $('#container').highcharts();
            for (var index =0; index<csylArray.length; index++)
            {
                var dataString = [];
                for (var dindex =0; dindex<cssjArray.length; dindex++) {
                    dataString.push({
                        y: parseFloat(fpsArray[index][dindex])
                    });
                }

                chart.addSeries({
                    name: csylArray[index],
                    data: dataString
                },true);
            }

            for(var i =1; i<chart.series.length; i++)
            {
                chart.series[i].hide();
            }

        });



    </script>
</head>
<body>
<script src="../Highcharts/js/highcharts.js"></script>
<script src="../Highcharts/js/modules/exporting.js"></script>
<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

</body>
</html>
