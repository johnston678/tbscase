<?php
/**
 * Created by PhpStorm.
 * User: johnston
 * Date: 15-7-8
 * Time: 下午8:33
 */

/*
echo "_POST:".$_POST."<br/>";
echo "_POST[ttcsylarray]:".$_POST[ttcsylarray]."<br/>";
echo "_POST[ttfpsarray]:".$_POST[ttfpsarray]."<br/>";
echo "_POST[ttcsbb]:".$_POST[ttcsbb]."<br/>";
echo "_POST[ttcssj]:".$_POST[ttcssj]."<br/>";
echo "_POST[ttsjxx]:".$_POST[ttsjxx]."<br/>";
echo "_POST[ttfzxx]:".$_POST[ttfzxx]."<br/>";
*/

if(""==$_POST[ttcssj] || null==$_POST[ttcssj])
    return;

$ttcsylarray = explode(',', $_POST[ttcsylarray]);
$ttminfpsarray = explode(',', $_POST[ttminfpsarray]);
$ttmaxfpsarray = explode(',', $_POST[ttmaxfpsarray]);
$ttavgfpsarray = explode(',', $_POST[ttavgfpsarray]);
$ttcsbb = $_POST[ttcsbb];
$ttcssj = $_POST[ttcssj];
$ttsjxx = $_POST[ttsjxx];
$ttfzxx = $_POST[ttfzxx];
$ttua = $_POST[ttua];

//echo "ttcsylarray:"."is_array:".is_array($ttcsylarray)."count:".count($ttcsylarray)."ttcsylarray[0]".$ttcsylarray[0];

$con = mysql_connect("qdm114751488.my3w.com", "qdm114751488", "309341935");
if (!$con) {
    echo('Could not connect: '.mysql_error());
}

mysql_select_db("qdm114751488_db", $con);

$recordsCount = 0;
for ($index=0;$index<count($ttcsylarray);$index++)
{
    if(""==$ttcsylarray[$index] || null==$ttcsylarray[$index] || ""==$ttavgfpsarray[$index] || null==$ttavgfpsarray[$index])
    {
        //echo $ttcsylarray[$index].'do not test finish!';
        continue;
    }

    $sql = "INSERT INTO tt_monitor (csyl, minfps, maxfps,avgfps,csbb,cssj,sjxx,fzxx,ua)
     VALUES
    ('$ttcsylarray[$index]','$ttminfpsarray[$index]','$ttmaxfpsarray[$index]','$ttavgfpsarray[$index]','$ttcsbb','$ttcssj','$ttsjxx','$ttfzxx','$ttua')";

    //echo "sql:".$sql;
    if (!mysql_query($sql, $con)) {
        echo('Error: ' . mysql_error());
    }
    $recordsCount++;
}

echo $recordsCount." records insert sucess!";

mysql_close($con);
