
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var flag = true;
function showTab(n) {
// This function will display the specified tab of the form...
var x = document.getElementsByClassName("tab");
x[n].style.display = "block";
//... and fix the Previous/Next buttons:
if (n == 0) {
document.getElementById("prevBtn").style.display = "none";
} else {
document.getElementById("prevBtn").style.display = "inline";
}
if (n == (x.length - 1)) {
document.getElementById("nextBtn").innerHTML = "Submit";
} else {
document.getElementById("nextBtn").innerHTML = "Tiếp Theo";
}

//... and run a function that will display the correct step indicator:
fixStepIndicator(n)
}

function nextPrev(n) {
if(n == 1)
	flag = true;
else
	flag = false;
// This function will figure out which tab to display
var x = document.getElementsByClassName("tab");
// Exit the function if any field in the current tab is invalid:
if (n == 1 && !validateForm()) return false;
// Hide the current tab:
x[currentTab].style.display = "none";
// Increase or decrease the current tab by 1:
currentTab = currentTab + n;
// if you have reached the end of the form...
if (currentTab >= x.length) {
// ... the form gets submitted:
document.getElementById("regForm").submit();
return false;
}

// Otherwise, display the correct tab:
showTab(currentTab);
}

function validateForm() {
// This function deals with validation of the form fields
var x, y, i, valid = true;
x = document.getElementsByClassName("tab");
y = x[currentTab].getElementsByTagName("input");
// A loop that checks every input field in the current tab:

return valid; // return the valid status
}

function fixStepIndicator(n) {
// This function removes the "active" class of all steps...
var i, x = document.getElementsByClassName("step");
//... and adds the "active" class on the current step:;
if(flag)
	document.getElementsByClassName("step")[currentTab].className += " active";
if(flag == false)
	{
			x[n+1].className = x[n+1].className.replace(" active", "");
	}
}






     

