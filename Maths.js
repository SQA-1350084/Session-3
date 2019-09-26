function maths()
{
addition = "this is the product of two or more numbers"
subtraction = "this is the removal of a quantity from a number"
 divistion = "this is the reduction of a number by a specific amount"

 operator = prompt ("Pleas enter one of the folloing: add, subtract, divide or multiply","")

 if (operator == "add") {
   opl = "you have selected ADDITION, "
   document.getElementById ("maths").innerHTML = opl + addition
 }

else if (operator == "subtract") {
  op2 = "You have selected SUBTRACTION, "
  document.gerElementById("maths").innerHTML = op2 + subtraction
}

else if (operator == "multiply") {
  op3 = "You have selected MULTIPLICATION, "
  document.getElementById("maths").innerHTML= op3 + multiplication

}

else if (operator == "divide") {
  op4 = "You have selected DIVISTION, "
  document.getElementById("maths").innerHTML = op4 = divistion

}

else if (operator == "") {
  op5 = "you have selected nothing, try again"
  document.getElementById("maths").innerHTML = op5

}

}
