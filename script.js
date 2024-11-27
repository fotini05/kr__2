const sweaters = [
  {
    image: "1.jpg",
    description: "Классический",
    price: 25000000
  },
  {
    image: "2.jpg",
    description: "Неоклассика",
    price: 20000000
  },
  {
    image: "3.jpg",
    description: "Деревенский",
    price: 15000000
  },
  {
    image: "4.jpg",
    description: "Таунхаус",
    price: 1000000
  },
  {
    image: "5.jpg",
    description: "Современный",
    price: 80000000
  },
  {
    image: "6.jpg",
    description: "Минимализм",
    price: 15000000
  }
    
];

// Функция для создания блока с информацией о свитере
function createProductBlock(sweater) {
  const block = document.createElement("div");
  block.classList.add("product-block");

  const image = document.createElement("img");
  image.src = sweater.image;
  block.appendChild(image);

  const description = document.createElement("h3");
  description.textContent = sweater.description;
  block.appendChild(description);

  const price = document.createElement("p");
  price.textContent = `Цена: ${sweater.price} руб.`;
  block.appendChild(price);
  return block;}
  const productContainer = document.getElementById("product-container");

sweaters.forEach(sweater => {
const productBlock = createProductBlock(sweater);
productContainer.appendChild(productBlock);
});

