import pictures from "../db/pictures.js"
console.log(pictures);

// Получаем доступ к конкретному элементу html

console.dir(document)

// const navList = document.querySelector("#navList")
const navList = document.getElementById("navList")
console.log(navList);

console.dir(navList)


// Добавим class нашему элементу

navList.classList.add("list")

const items = [...navList.children].map((elem)=>{
    console.log(elem.children);
    return [...elem.children]
    
})
console.log(items);

const links = items.map((elem)=>{
    console.log(elem);
    return elem[0].classList.add("link")
})


// Получаем доступ к группе элементов

const myLinks = document.querySelectorAll("#navList a")
console.log(myLinks);

[...myLinks].map((elem)=>{
    return elem.classList.add("links")
})


const sectionTitle = document.querySelector(".title")
console.log(sectionTitle);

sectionTitle.textContent = "Hello world"
sectionTitle.style.textAlign = "center"
sectionTitle.style.marginTop = "100px"
sectionTitle.style.fontSize = "70px"

const images = [...document.querySelectorAll(".picturesList img")]
console.log(images);

for(let i=0;i<images.length;i++) {
    console.log(pictures[i]);
    console.log(images[i]);
    images[i].src=pictures[i]
    images[i].setAttribute("width","400px")
}

const picturesList = document.querySelector(".picturesList")
console.log(picturesList);

picturesList.classList.add("list")