const categoriesItem = document.querySelector("#categories");
console.log("Number of categories:", categoriesItem.childElementCount)

for (const element of categoriesItem.children) {
    const headerCategory = element.querySelector('h2').textContent
    const elementsAmount = element.querySelector('ul').childElementCount
    
    console.log("Category:", headerCategory)
    console.log("Elements:", elementsAmount)
}