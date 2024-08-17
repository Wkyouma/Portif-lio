const elements = document.querySelectorAll(".hidden")


const MyObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting==true){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
    console.log(entries )
})

elements.forEach( (element)=>MyObserver.observe(element))


let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);
