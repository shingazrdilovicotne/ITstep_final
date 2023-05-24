let products = {
    data: [
      {
        productName: "Durable tupperware bottles (Black Version)",
        category: "Topwear",
        price: "10",
        image: "img/bottle.png",
      },
      {
        productName: "Youth The Child Bluetooth Headphones",
        category: "Bottomwear",
        price: "15",
        image: "img/airphone.png",
      },
      {
        productName: "CTRL brand tupperware bottles",
        category: "Watch",
        price: "99",
        image: "img/ccc.png",
      },
      {
        productName: "Miniature hotwheels black sports",
        category: "Topwear",
        price: "29",
        image: "img/cccc.png",
      },
      {
        productName: "Headphone Super Bass Stereo High Quality",
        category: "Jacket",
        price: "129",
        image: "img/ccccc.png",
      },
      {
        productName: "Neve Strix Pro L123 (2021) - TP399K 1TB",
        category: "Bottomwear",
        price: "89",
        image: "img/leptop.png",
      },
      {
        productName: "Dark King M346 Mechanical Keyboard - Free 31 Keys",
        category: "Jacket",
        price: "189",
        image: "img/keyboard (1).png",
      },
      {
        productName: "Reader Touring Coboy Brc Black Leather Boots",
        category: "Bottomwear",
        price: "49",
        image: "img/12.png",
      },
      {
        productName: "Meta Galaxy X oliw10 5G sintra 256 GB",
        category: "Bottomwear",
        price: "49",
        image: "img/13.png",
      },
      {
        productName: "Overflow.id - Basic plain black t-shirt",
        category: "Bottomwear",
        price: "49",
        image: "img/14.png",
      },
      {
        productName: "Leather bag packed with football",
        category: "Bottomwear",
        price: "49",
        image: "img/i hate.png",
      },
      {
        productName: "Zineta Slip On Brown Sandals for Women",
        category: "Bottomwear",
        price: "49",
        image: "img/kaloshebi.png",
      },
      {
        productName: "Limited edition silver women's necklace",
        category: "Bottomwear",
        price: "49",
        image: "img/jawerly.png",
      },
      {
        productName: "Playstation Gamepad Stick Controller",
        category: "Bottomwear",
        price: "49",
        image: "img/controller.png",
      },
      {
        productName: "Premium foam minimalist black chair",
        category: "Bottomwear",
        price: "49",
        image: "img/chair.png",
      },
      {
        productName: "Original World Premiere Super 5 Pro Tablet 8gb",
        category: "Bottomwear",
        price: "49",
        image: "img/tablet.png",
      },
      {
        productName: "Black and yellow cap headwear",
        category: "Bottomwear",
        price: "49",
        image: "img/3.png",
      },
      {
        productName: "Domtrain Hiking Mountain Backpack",
        category: "Bottomwear",
        price: "49",
        image: "img/4.png",
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

  