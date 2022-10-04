const moreButton = document.querySelector(".more-button");
const moreInfo = document.querySelector(".about--more-info");
const mainDescription = document.querySelector(".about--description");
const profileImage = document.querySelector(".profile-img")

moreButton.addEventListener("click", removeHide)

function removeHide () {

    if (moreInfo.classList.contains("hide")) {
        moreInfo.classList.remove("hide");
        moreButton.innerText = "Business in the front:"
        mainDescription.classList.add("hide");
        profileImage.classList.add("hide");
        scrollTo(0, 195)
    } else {
        moreInfo.classList.add("hide")
        moreButton.innerText = "Party in the back:"
        mainDescription.classList.remove("hide");
        profileImage.classList.remove("hide");
        scrollTo(0, 195)
    }
}
