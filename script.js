//console.log('check')
const firstElement= document.querySelectorAll(".panel")

firstElement.forEach((i) => {
    console.log(i);
    i.addEventListener("mouseover",()=>{
    
        i.classList.add("active");
    });
        
    i.addEventListener("mouseout",()=>{
        i.classList.remove("active");
       
    });
    });
    console.log(firstElement);
    



