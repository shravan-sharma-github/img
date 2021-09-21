header = document.getElementById("header");
home = document.getElementById("home_nav");
projects = document.getElementById("projects_nav");
about = document.getElementById("about_nav");
contact = document.getElementById("contact_nav");

sec_home = document.getElementById("home_section");
sec_projects = document.getElementById("projects_section");
sec_about = document.getElementById("about_section");
sec_contact = document.getElementById("contact_section");

head = header.offsetTop;
window.onscroll = function(){
    if(window.scrollY > head){
        header.classList.add("fix_head");
    }
    else{
        header.classList.remove("fix_head");
    }
}

home.addEventListener('click',function(){
    
})
home.addEventListener('mouseout',function(){
    //document.documentElement.scrollBy(0,-50);
})

projects.addEventListener('mouseover',function(){
    projects.style.color = "green"
})
projects.addEventListener('mouseout',function(){
    projects.style.color = "black"
})

about.addEventListener('mouseover',function(){
    about.style.color = "green"
})
about.addEventListener('mouseout',function(){
    about.style.color = "black"
})

contact.addEventListener('mouseover',function(){
    contact.style.color = "green"
})
contact.addEventListener('mouseout',function(){
    contact.style.color = "black"
})