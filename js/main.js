const moreButton = document.querySelector(".more-button");
const moreInfo = document.querySelector(".about--more-info")
const profileImage = document.querySelector(".profile-img");
const aboutDescription = document.querySelector(".about--description");
const aboutContainer = document.getElementById("about");

moreButton.addEventListener("click", removeHide)

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
