const amount = document.querySelector(".amount");
const figure = amount.querySelectorAll("img");
const num = amount.querySelector("p")
const value = document.querySelector(".numbers")
figure.forEach(function(item){
    item.addEventListener("click", ()=>{
        if (item === figure[0]){
            const result = parseInt(num.textContent) - 1
            if(result>-1) {
                num.textContent = result
                value.textContent = result
                value.style.display = "inline";
            }
        }
        else if (item === figure[1]){
            const result = parseInt(num.textContent) + 1
            if(result>-1) {
                num.textContent = result
                value.textContent = result
                value.style.display = "inline";
            }
        }
    })
})