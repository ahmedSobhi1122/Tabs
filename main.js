const tabs = document.querySelectorAll(".Tab_Btn");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab,i)=>{
    tab.addEventListener("click",(e)=>{
        tabs.forEach(t=>t.classList.remove("active"));
        tab.classList.add("active");
        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        contents.forEach(content=>content.classList.remove("active"));
        contents[i].classList.add("active");
        // console.log(contents[i]);
    });
});