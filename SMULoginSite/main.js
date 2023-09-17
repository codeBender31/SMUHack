

function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}
//Search filter function
function filterFunction() {
  var input, filter, ul, li, a, i;
  //References the element myInput
  input = document.getElementById("myInput");
  //Filter the value 
  filter = input.value.toUpperCase();
  //
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  //Search through the elements 
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    //If the first letter entered is the first letter of a valid result
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


