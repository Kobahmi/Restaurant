import renderAbout from "./about"; 
import renderMenu from "./menu"
import renderContact from "./contact"

const headerCreate = () => {
    const content = document.querySelector("#content")

    const header = document.createElement("header")
    header.classList.add("header")
    
    const brand = document.createElement("div")
    brand.classList.add("brand")
    
    const brandName1 = document.createElement("h1")
    brandName1.textContent = "KOBAHMI"
    const brandName2 = document.createElement("h3")
    brandName2.textContent = "RAMEN"
      
    const navContainer = document.createElement("div")
    navContainer.classList.add("nav-container")
    
    const aboutBtn = document.createElement("button")
    aboutBtn.classList.add("nav")
    aboutBtn.setAttribute("id", "about-btn")
    aboutBtn.textContent = "ABOUT"
    aboutBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        content.removeChild(content.lastChild)
        setActive(aboutBtn);
        renderAbout()
    })

    const menuBtn = document.createElement("button")
    menuBtn.classList.add("nav")
    menuBtn.setAttribute("id", "menu-btn")
    menuBtn.textContent = "MENU"
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        content.removeChild(content.lastChild)
        setActive(menuBtn);
        renderMenu()
    })
    
    const contactBtn = document.createElement("button")
    contactBtn.classList.add("nav")
    contactBtn.setAttribute("id", "contact-btn")
    contactBtn.textContent = "CONTACT"
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        content.removeChild(content.lastChild)
        setActive(contactBtn);
        renderContact()
    })
    
    
    brand.appendChild(brandName1)
    brand.appendChild(brandName2)
    navContainer.appendChild(aboutBtn)
    navContainer.appendChild(menuBtn)
    navContainer.appendChild(contactBtn)
    header.appendChild(brand)
    header.appendChild(navContainer)
    content.appendChild(header)


    const setActive = (button) => {
    const navBtn = document.querySelectorAll(".nav")
    navBtn.forEach(button => {
        button.classList.remove("active")
    })
    button.classList.add("active")
    }

    
setActive(aboutBtn);
renderAbout()
}




export default headerCreate