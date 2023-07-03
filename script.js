function calculateTip() {
    let billTotal = document.getElementById("billTotal").value;
    let tipPercentage = document.getElementById("tipPercentage").value;
    let total = (billTotal * tipPercentage);

if (tipPercentage == 0) {
  alert("Please enter a Tip Percentage value");
  return;
}
if (billTotal === "") {
  alert("Please enter a Bill value");
  return;
}

    total = total.toFixed(2); // this limits the code to 2 decimals - do i need to add a rounding element or does it do that automatically

    document.getElementById("totalTip").style.display = "block"; // this is to show the tip at the end

    document.getElementById("tip").innerHTML = total;  // this is to change the tip number
    
}

// Hide the £0.00 figure on page load until submit
document.getElementById("totalTip").style.display = "none";

//click to call function - could i put calc tip into this function to streamline?
document.getElementById("calculate").onclick = function() {
    calculateTip();
  };
