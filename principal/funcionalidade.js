let products = {
    data: [
      {
        productName: "Buque de Rosas",
        category: "buque",
        price: "200",
        image: "https://www.isabelaflores.com/media/catalog/product/a/l/alta-176-1.webp",
      },
      {
        productName: "Buque de Rosas",
        category: "buque",
        price: "200",
        image: "https://static.novaflor.com.br/images/product/29710gg.jpg?ims=750x750",
      },
      {
        productName: "Buque de Rosas",
        category: "buque",
        price: "200",
        image: "https://www.polenflor.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2029_4.jpg",
      },
      {
        productName: "Buque de Rosas",
        category: "buque",
        price: "200",
        image: "https://www.floragaucha.com.br/wp-content/uploads/2020/05/buque_rosas_no_cachepot1.jpg",
      },
      {
        productName: "Buque de Rosas",
        category: "buque",
        price: "200",
        image: "https://images.tcdn.com.br/img/img_prod/863188/buque_rosas_amarelas_117_1_1a5ff5c2759df34195ae9548c28bde1a.jpg",
      },
      {
        productName: "Buque de Rosas",
        category: "buque",
        price: "200",
        image: "https://stack.flowermarket.com.br/saleteflores/images/produto/600_1441.jpg",
      },
      {
        productName: "Muda de Jiboia",
        category: "muda",
        price: "200",
        image: "https://i0.wp.com/floresdelivery.com.br/wp-content/uploads/2017/05/fotos-floricutura-36.jpg?fit=1001%2C1000&ssl=1",
      },
      {
        productName: "Muda de Pau-Brasil",
        category: "muda",
        price: "200",
        image: "https://brasilnativas.com.br/wp-content/uploads/2021/04/muda_de_pau_brasil_feita_por_semente_9680_3_20190521161357-600x600.jpg",
      },
      {
        productName:"Muda de Graviola",
        category:"muda",
        price:"200",
        image:"https://brasilnativas.com.br/wp-content/uploads/2020/12/Mudas_graviola-600x600.png",
      },
      {
        productName:"Cesta Personalizada",
        category:"cesta",
        price:"200",
        image:"https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(95)/bellasce/catalog/dia-dos-namorados/cesta-site-7.jpg",
      },
      {
        productName:"Cesta Personalizada",
        category:"cesta",
        price:"200",
        image:"https://stack.flowermarket.com.br/eliteflores/images/produto/600_2206.jpg",
      },
      {
        productName:"Cesta Personalizada",
        category:"cesta",
        price:"200",
        image:"https://cdn.dooca.store/8052/products/bxqdodg96024ho2jq1sun02irugsqpdmt69p_640x640+fill_ffffff.png?v=1651170887&webp=0",
      },
      {
        productName:"Cesta Personalizada",
        category:"cesta",
        price:"200",
        image:"https://centraldasflores.com.br/pub/media/catalog/product/cache/9d08971813a040f8f96067a40f75c615/c/e/cesta_flores_mistas.png",
      },
      {
        productName:"cesta Personalizada",
        category:"cesta",
        price:"200",
        image:"https://cdn.awsli.com.br/1000x1000/1161/1161453/produto/43608439/df46c7569c.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };