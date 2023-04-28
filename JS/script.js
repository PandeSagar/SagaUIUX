// Typing animation
// var typed = new Typed(".typing",{
//   String:[" ", "web Designer", "Web Developer", "Graphic Designer", "front End Developer"]
//   typeSpeed:100,
//   backSpeed:60,
//   loop:true
// })
//  Aside
const nav = document.querySelector(".nav")
    navList = nav.querySelector("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++)
    {
      console.log(navList[i]).querySelector("a");
      a.addEventListener("click", function()
      {
        for(let j=0; j<totalNavList; j++)
        {
          navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
      })
    }
    function showSection(element)
    {
      console.log(element)
    }