/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site lorsqu'on clique dessus.
*/

 const pushTopBtn =  document.querySelector(".push-top-button")

pushTopBtn.addEventListener("click", pushToTop)

function pushToTop(){
    //methode 1 

 //   document.documentElement.scrollTop = 0

   // methode 2
/*
   window.scroll({
    top: 0,
    behavior : "smooth"
   })

   */
  document.documentElement.scrollIntoView({
    behavior: "smooth", block:"start"
  })
  }
/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes d'UX mais ce n'est pas ce qui compte ici. 👍
*/
