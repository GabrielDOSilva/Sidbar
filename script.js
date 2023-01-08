const body = document.querySelector("body"),
      contGeral = body.querySelector(".cont-geral");
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-tex")


toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
    contGeral.classList.toggle("close");

});

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
    }else{
        modeText.innerText = "Dark Mode"
    }

});
