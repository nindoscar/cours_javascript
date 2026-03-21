const emojis = ["😠","🙁","😐","🙂","😁"]

const emojiText = document.querySelector(".emoji-value")

const range = document.querySelector(".range-input")

range.addEventListener("input", handleRange)

function handleRange(e){
    emojiText.textContent = `${emojis[e.target.value - 1]}`
}