const form = document.querySelector(".form-call-for-me")
const mask = document.querySelector(".mask-form")




function openForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function closedForm() {
    form.style.left = "-320px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}


