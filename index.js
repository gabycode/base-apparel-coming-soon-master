let emailForm = document.getElementById("email")

emailForm.addEventListener("submit", e => {
    e.preventDefault()
    let ourFormData = new FormData(e.target)
    let userEmailAddress = ourFormData.get("emailAddress")

    let updatedHtml = `
        <h2>Thank you for suscribing!</h2>
        <p class="fine-print">We'll never share your information without your permission</p>
        <p class="fine-print">You will receive announcements and launch deals sent to: ${userEmailAddress}</p>`  

    let ourTextContent = document.getElementById("text-content")
    ourTextContent.innerHTML = updatedHtml
})