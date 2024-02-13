const amount = document.querySelector(".amount");
const figure = amount.querySelectorAll("img");
const num = amount.querySelector("p")
const value = document.querySelector(".numbers")
const cartItems = document.querySelector(".cartitems")
const avatar = document.querySelector("#avatar")
const mainImage = document.querySelector(".main")
const thumbnailImages = document.querySelectorAll(".thumbnail")
const displayImage = document.querySelector(".main_images")
const mainDisplayImage = displayImage.querySelectorAll("img")
const thumbArray = Array.from(thumbnailImages)
const cartList = document.querySelector(".cartList")
const breakDown = document.querySelector("#breakdown")
const spans = breakDown.querySelectorAll("span")
const checks = document.querySelector(".Checks")
const styledBorderImg = document.querySelector(".styled-border");
const cartAdditionButton = document.querySelector(".cart")
const Edit = [checks]
let count1 = 0
let count2 = 0

/* For thumnail images designs*/
thumbnailImages.forEach(function(item){
    item.addEventListener("click", () => {
        thumbnailImages.forEach(function(subst){
            if (subst.classList.contains("styled-border")){
                subst.classList.remove("styled-border")
            }
        })
        item.classList.add("styled-border") 
        mainDisplayImage.forEach(function(images){
            if(images.classList.contains("main")){
                images.classList.remove("main")
            }
        })
        const indexValue = thumbArray.indexOf(item);
        mainDisplayImage[indexValue].classList.add("main")
        num.textContent = "0"

       
    }
        )
})

if (Edit.length === 2){
    console.log(Edit)
}
thumbnailImages.forEach(function(item){
    item.addEventListener("click", ()=>{

    })
})
/* For avatar */
avatar.addEventListener("click", ()=>{
    const cartItemsStyle = getComputedStyle(cartItems);
    if (cartItemsStyle.getPropertyValue("display")=== "none"){
        cartItems.style.display = "block"
    }
    else {
        cartItems.style.display = "none"
    } 
})
/* Cart Algorithm function */
figure.forEach(function(item){
    item.addEventListener("click", numberChange(item)) 
})
cartAdditionButton.childNodes[1].addEventListener("click", numberChange())
function numberChange(item){
    if (item === figure[0]){
        const result = parseInt(num.textContent) - 1
        if(result>-1) {
            num.textContent = result
            value.textContent = result
            value.style.display = "inline";
            spans[1].textContent === result
            spans[1].textContent = result

        }
    }
    else if (item === figure[1]){
        const result = parseInt(num.textContent) + 1
        if(result>-1) {
            num.textContent = result
            value.textContent = result
            value.style.display = "inline";
            spans[1].textContent = result
            console.log(spans[1].textContent)
        }
    }
}
