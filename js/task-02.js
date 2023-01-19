const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const ingredientItem = document.createElement("li")
  ingredientItem.textContent = ingredient
  ingredientItem.classList.add("item")
  return ingredientItem
})

const listRef = document.querySelector("#ingredients")
listRef.append(...elements)