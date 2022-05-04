/** @format */
function Spinner() {
  $spinner = document.getElementsByClassName("spinner-grow")[0];
  //   $spinner.style.display = "block";
  $spinner.style.marginLeft = 30;

  //   SetTimeout
  setTimeout(() => {
    $spinner.style.display = "none";
  }, 3000);
}
// Call the function
Spinner();
