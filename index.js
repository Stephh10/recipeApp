let result = document.querySelector(".result")

let searchBtn = document.querySelector(".btn")
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
let showBtn = document.querySelector(".showBtn")
let closeBtn = document.querySelector(".closeBtn")

document.querySelector(".info").style.display = "none"
document.querySelector(".showBtn").style.display = "none"
document.querySelector(".result").style.display = "none"




searchBtn.addEventListener("click", () => {


    let input = document.querySelector("#rec-input").value
    if(input.length == 0) {
       document.querySelector(".alert").innerHTML = "Enter something"
    }
    else {
        fetch(url + input)
        .then((response) => response.json())
        .then((data) => {
            let myMeal = data.meals[0]
            console.log(myMeal)
            // console.log(myMeal.strMealThumb)
            // console.log(myMeal.strMeal)
            // console.log(myMeal.strArea)
            // console.log(myMeal.strInstructions)
        
            let count = 1
            let ingredients = []
            for(let ing in myMeal) {
                if(ing.startsWith("strIngredient") && myMeal[ing]) {
                    let ingredient = myMeal[ing]
                    let messure = myMeal["strMeasure" + count]
                    count += 1
                    // console.log(ingredient, messure)
                    ingredients.push(`${messure}, ${ingredient}`)
                }
            }
        
            console.log(ingredients)
            
        
            let img = document.querySelector("#img")
            img.src = `${myMeal.strMealThumb}`
            document.querySelector(".name").innerHTML = `${myMeal.strMeal}`
            document.querySelector(".from").innerHTML = `${myMeal.strArea}`
            document.querySelector(".details").innerHTML = `${myMeal.strInstructions}`


            for(let elem of document.querySelectorAll("ul")) {
                elem.remove()
            }
            let ul = document.createElement("ul")
            
            ingredients.forEach((item) => {
                // console.log(item)
                
                let li = document.createElement("li")
                li.append(item)
                ul.append(li)
            })
            let mainEl = document.querySelector(".all-ingredians")
            mainEl.append(ul)
        })

        document.querySelector(".info").style.display = "block"
        document.querySelector(".showBtn").style.display = "block"  
        document.querySelector(".result").style.display = "block" 
    }
    



})




showBtn.addEventListener("click", () => {
    document.querySelector(".cover").style.display = "block"
})
closeBtn.addEventListener("click", () => {
    document.querySelector(".cover").style.display = "none"

})

