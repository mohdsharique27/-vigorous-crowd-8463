//sticky navbar

//EXECUTE FUNCTION OF SCROLL
 window.onscroll = function (){
    myfunction()
 };

 //SELECTING NAVBAR

 let navbar= document.getElementById("navbar");

 let sticky = navbar.offsetTop;

 function myfunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
 }



// slideShow of sale part

let slideIndex=0;
showSlide();

function showSlide(){
    let slide = document.getElementsByClassName("myslideshow");
    for(let i=0;i<=slide.length-1;i++){
        slide[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex> slide.length){
        slideIndex=1;
    }
    slide[slideIndex-1].style.display = "block";
    setTimeout(showSlide,2000);
}

let bag = []
let cartItems=JSON.parse(localStorage.getItem("cartProducts"))
let url ="https://fakestoreapi.com/products";
fetch(url)
.then((res) => res.json())
.then((data) =>{
    bag = data;
    console.log(data)

    displayCards(data);
});

//Search 

function search(){
    let q= document.querySelector("input").value
    
     let newData = bag.filter(function(elem){
      return elem.title.toLowerCase().includes(q.toLowerCase())||[];
      
     });
     displayCards(newData);
     
  }



function displayCards(data){
 data.forEach(function (elem){
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src",elem.image)
    let title = document.createElement("h2");
    title.innerText = elem.title
    let cost = document.createElement("p")
    cost.innerText = elem.price

    let rating = document.createElement("p")
    rating.innerText = elem.rating.rate

    let cart_btn = document.createElement("button");
        cart_btn.innerText="Add to Cart";

        cart_btn.addEventListener("click",function(){
            cartItems.push(elem)
            localStorage.setItem("cartProducts",JSON.stringify(cartItems))
        })

    div.append(image,title,cost,rating,cart_btn)
    document.querySelector(".trending-container").append(div);
 });
    
}




