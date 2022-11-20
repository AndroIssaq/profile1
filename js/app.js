// Start Nav Animate
let navBtn=document.querySelector(".nav-btn")
let nav=document.querySelector("#nav")
let links=document.querySelectorAll("#nav li a")
let li=document.querySelectorAll("#nav li")
let sections=document.querySelectorAll("section")
let goToNexts=document.querySelectorAll(".go-to-next")
let revewHolder=document.querySelector(".revew-holder")
let revew=document.querySelector(".revew")
let prevBtns=document.querySelectorAll(".prev")
let nextBtns=document.querySelectorAll(".next")
console.log(prevBtns);
let counter=0;
let size=revew.clientWidth+181
let button=document.querySelector(".scroll-to-top")
/*
if (document.body.clientWidth<=1500){
    
    sections.forEach((section)=>{
        section.classList.remove("padin")
        section.classList.add("padout")
        navBtn.style.display="none"
       
    })
}*/

/*start show links*/
let navbutton=document.querySelector(".nav-button")
let ul=document.querySelector("ul")

navbutton.addEventListener("click",()=>{
    if(ul.classList.contains("ul-fadeout")){
        ul.classList.remove("ul-fadeout")
        ul.classList.add("ul-fadein")
    }else{
        ul.classList.remove("ul-fadein")
        ul.classList.add("ul-fadeout")
    }
   
})

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        ul.classList.add("ul-fadeout")
    })
})
/*end show links*/

// progress bar on scroll function
window.addEventListener("scroll",()=>{
    let bodyTop=-document.body.getBoundingClientRect().top
let bodyHeight=document.body.getBoundingClientRect().height
let lastSectionHeight=Math.floor( document.querySelector(".contact").clientHeight/100)
let button=document.querySelector(".scroll-to-top")
let progressBar=document.querySelector(".progress-bar")

if(bodyTop<=1000){
    
    button.textContent=Math.floor(((bodyTop/bodyHeight)*100)) +"%"
    progressBar.style.width=Math.floor(((bodyTop/bodyHeight)*100))+"%"
}else{
    button.textContent=Math.floor(((bodyTop/bodyHeight)*100) +lastSectionHeight) +"%"
    progressBar.style.width=Math.floor(((bodyTop/bodyHeight)*100)+lastSectionHeight)+"%"
}

if(bodyTop>=10200){
    button.textContent=""
    button.innerHTML='<i class="fa-solid fa-arrow-up"></i>'
}

})
button.addEventListener("click",()=>{
       window.scrollTo({
        top:0,
        behavior:"smooth"
       })
})




//Start function to open & close nav
navBtn.addEventListener("click",()=>{
    if(nav.classList.contains("open-nav")){
        nav.classList.remove("open-nav")
        nav.classList.add("close-nav")
        size=revew.clientWidth+181
        sections.forEach((section)=>{
            section.classList.remove("padin")
            section.classList.add("padout")
            section.style.transition=".5s"
        })
        goToNexts.forEach((goToNext)=>{
            goToNext.classList.remove("padin")
            goToNext.classList.add("padout")
            goToNext.style.transition=".5s"
        })
        navBtn.style.left="0px"
        navBtn.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
    }else{
        nav.classList.remove("close-nav")
        nav.classList.add("open-nav")
        sections.forEach((section)=>{
            section.classList.remove("padout")
            section.classList.add("padin")
            size=revew.clientWidth+181
            console.log(size);
        })
        goToNexts.forEach((goToNext)=>{
            goToNext.classList.remove("padout")
            goToNext.classList.add("padin")
            goToNext.style.transition=".5s"
        })
        navBtn.style.left="328px"
        navBtn.innerHTML='<i class="fa-solid fa-arrow-left"></i>'
    }
    
})
//End function to open & close nav

//Start function to add class active to links
    links.forEach((link)=>{
        link.addEventListener("click",(e)=>{
            e.preventDefault()
            links.forEach((ele)=>{
                ele.parentElement.classList.remove("avtivate")
            })
            e.currentTarget.parentElement.classList.add("avtivate")
        })
    })

    li.forEach((link)=>{
        link.addEventListener("click",(e)=>{
            e.preventDefault()
            li.forEach((ele)=>{
                ele.classList.remove("avtivate")
            })
            e.currentTarget.classList.add("avtivate")
        })
    })

//End function to add class active to links

// End Nav Animate
//Start function to scroll when clicked on link
links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault()
        let anchor= link.getAttribute("href")
        console.log(anchor);
        document.querySelector(`.${anchor}`).scrollIntoView({
            behavior:"smooth"
        })
    })
    })

    let options={
        trasHold:.8
    };
    let observer=new IntersectionObserver(check,options)

    function check(entrys){
        entrys.forEach((entry)=>{
           const className=entry.target.classList[0]
            let activeAnchor=document.querySelector(`[data-target=${className}]`)
           if(entry.isIntersecting==true){
            activeAnchor.classList.add("activate")
           }else{
            activeAnchor.classList.remove("activate")
           }
        })
    }
    sections.forEach((section)=>{
        observer.observe(section)
    })
//End function to scroll when clicked on link
let boxes=document.querySelectorAll(".biography .box")
let biography=document.querySelector(".biography")
let biographyTop=biography.offsetTop-50
let cv=document.querySelector(".cv")
let cvTop=cv.offsetTop
let htmlProgress=document.querySelector(".html .progress-content")
let cssProgress=document.querySelector(".css .progress-content")
let jsProgress=document.querySelector(".js .progress-content")
let bootProgress=document.querySelector(".boot .progress-content")

console.log(cvTop);
window.addEventListener("scroll",()=>{
    if (window.scrollY>=biographyTop) {
        boxes.forEach((box)=>{
            box.classList.remove("transletedon-right")
            box.classList.remove("transletedon-left")
            box.classList.remove("biography-fadeout")
        })
    }
})
window.addEventListener("scroll",()=>{
    if(window.scrollY>=cvTop){
        htmlProgress.style.width="90%"
        cssProgress.style.width="80%"
        jsProgress.style.width="60%"
        bootProgress.style.width="98%"
    
    }
})

//Start function to Animate Biography Section



// revew section

revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
    prevBtns.forEach(prevBtn => {
        prevBtn.addEventListener("click",function(){
            if(counter<2){
                revewHolder.style.transition=".5s ease"
                counter++
                revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
            }else{
                counter=0
                revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
            }
           console.log(-size);
        })
    });
    
    nextBtns.forEach(nextBtn => {
        nextBtn.addEventListener("click",function(){
           if(counter==0){
            counter=3
           }else{
            revewHolder.style.transition=".5s ease"
            counter--
            revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
           }
           console.log(-size);
        })
    });




/*setInterval(()=>{
    if(counter==0){
        revewHolder.style.transition=".5s ease"
        counter++
        revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
    }else if(counter==1){
        counter++
        revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
    }else if(counter==2){
        counter=0
        revewHolder.style.transform='translateX('+(-size*counter)+ 'px)'
    }
},4000)
*/
// End revew section

// Start NEWS & TIPS
let items= document.querySelectorAll(".animate")
let loadMore=document.querySelector(".load-more")

loadMore.addEventListener("click",()=>{
    items.forEach((item)=>{
        if(item.classList.contains("fadeout")){
            item.classList.remove("fadeout")
            item.classList.add("fadein")
            loadMore.textContent="READ LESS"
        }else{
            item.classList.remove("fadein")
            item.classList.add("fadeout")
            loadMore.textContent="READ MORE"
        }
       
    })
    
})
// End NEWS & TIPS