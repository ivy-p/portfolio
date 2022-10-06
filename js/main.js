const moreButton = document.querySelector(".more-button");
const moreInfo = document.querySelector(".about--more-info")
const profileImage = document.querySelector(".profile-img");
const aboutDescription = document.querySelector(".about--description");
const aboutContainer = document.getElementById("about");

//Adding event listener for About section button
moreButton.addEventListener("click", removeHide)

// Function called when About section button is clicked, switching between professional and personal information.
function removeHide () {

    if (moreInfo.classList.contains("hide")) {
        moreInfo.classList.remove("hide");
        moreButton.innerText = "Business in the front:"
        aboutDescription.classList.add("hide");
        profileImage.classList.add("hide");
    } else {
        moreInfo.classList.add("hide")
        moreButton.innerText = "Party in the back:"
        aboutDescription.classList.remove("hide");
        profileImage.classList.remove("hide");
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggle () {
    var x = document.querySelector(".toggle-items")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
