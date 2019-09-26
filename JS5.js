var day;
switch (new Date().getDay()) {
case 0:
   day = "Sunday, Boo, no College";
   break;
case 1:
    day = "Monday, Boo, no College";
    break;
case 2:
    day = "Tuseday, Boo, no College";
    break;
case 3:
    day = "Wednesday, hurray, College";
    break;
case 4:
    day = "Thursday, Nah, College";
    break;
case 5:
    day="Fridayday, Hirray last day";
    break;
case 6:
    day = "Saturday, Hurray, no College";

}
document.getElementById("demo").innerHTML = "Today is " + day;
