const customMenu = document.querySelector(".custom-menu")
const customMenuBtns = document.querySelectorAll(".custom-menu button")

document.addEventListener("contextmenu", handleCustomContextMenu)

function handleCustomContextMenu(e){
  e.preventDefault()

    customMenu.style.display = "block"
    customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
}

document.addEventListener("click", handleDocumentClick)

function handleDocumentClick(){
    customMenu.style.display = "none"
}

