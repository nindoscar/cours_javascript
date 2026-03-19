
const copyToCliBoradButton = document.querySelector(".copy-clipboard-btn")

copyToCliBoradButton.addEventListener("click", handleCopyToClipBoard)

function handleCopyToClipBoard(e){
    navigator.clipboard.writeText(e.target.previousElementSibling.textContent)
}