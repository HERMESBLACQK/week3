



var burgerdiv= document.querySelector(".mobile-burger")
console.log(burgerdiv)
var mobilelinks = document.querySelector(".mobile-links")

function giveit() {
          burgerdiv.classList.toggle("showburger")
          mobilelinks.classList.toggle("show-mobile-links")

}