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

let bag={};
let url = "https://dummyjson.com/products"
fetch(url)
.then((res) => res.json())
.then((data) => {
    bag= data.products;
    showProducts(bag)
    // console.log(bag)
})

function showProducts(bag){
bag.forEach((elem) => {
    let currImage = 0;

    function updateImage(){
        ProImage.setAttribute("src",elem.images[currImage])
    }
    let div = document.createElement("div");
    
    let ProImage = document.createElement("img");
    ProImage.setAttribute("src",elem.images[currImage])
    ProImage.setAttribute("height",200)
    ProImage.setAttribute("width",300)

    let ProName = document.createElement("h2");
    ProName.innerText=elem.title

    let ProPrice = document.createElement("h3");
    ProPrice.innerHTML= " <strong>₹</strong>"+elem.price;

    let ProCategory = document.createElement("p");
    ProCategory.innerText=elem.category;
    
    let cart_btn= document.createElement("button");
    cart_btn.innerText="Add to Cart";

    let nextButton = document.createElement("button");
    let prevButton = document.createElement("button");

    nextButton.innerText = "Next";
    prevButton.innerText = "Previous";
    nextButton.addEventListener("click",()=>{
        if(currImage>elem.images.length-1) {
            return
        }
        currImage++;
        updateImage()
    })

    div.append(ProImage,ProName,ProPrice,ProCategory,cart_btn,nextButton,prevButton);
    
    document.querySelector(".trendingProducts").append(div);
});
 }

function handleSort(){
   let selected = document.querySelector("#filter").value
   if(selected=="HTL"){
    // DECENDING
    bag.products.sort((a,b)=>b.bag.price-a.bag.price)
   }
   if(selected=="LTH"){
    // ACCENDING
    bag.sort((a,b)=>a.bag.price-b.bag.price)
    
   }

   showProducts(bag)
}



