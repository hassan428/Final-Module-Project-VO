

// var sec = 0;
// function time()
// {
//     var slider = document.getElementById("custom-slider");
//     sec++

//     if(sec > 0)
//     {
//         slider.src = "Glasses/Slider/tom_ford_banner(1).jpg";
//     }
//     if(sec > 2)
//     {
//         slider.src = "Glasses/Slider/Tom-Ford-malaysia (1).jpg";
//     }
//     if(sec > 4)
//     {
//         slider.src = "Glasses/Slider/Ray-Ban-mens-eyeglasses (1).jpg";
//     }
//     if(sec > 6)
//     {
//         slider.src = "Glasses/Slider/Latest-Ray-Ban (1).jpg";
//     }
//     if(sec > 8)
//     {
//         slider.src = "Glasses/Slider/Slider-1(1).jpg";
//     }
//     if(sec > 10)
//     {
//         slider.src = "Glasses/Slider/burberry-9 (1).jpg";
//     }
//     if(sec > 12)
//     {
//         slider.src = "Glasses/Slider/cartier-15 (1).jpg";
//     }
//     if(sec > 14)
//     {
//         slider.src = "Glasses/Slider/gucci-12 (1).jpg";
//     }
//     if(sec > 16)
//     {
//         slider.src = "Glasses/Slider/gucci-20 (1).jpg";
//     }
//     if(sec > 18)
//     {
//         slider.src = "Glasses/Slider/gucci-6 (1).jpg";
//     }
//     if(sec > 20)
//     {
//         slider.src ="Glasses/Slider/louis-14 (1).jpg";
//     }
//     if(sec > 22)
//     {
//         slider.src = "Glasses/Slider/porshce-24 (1).jpg";
//     }
//     if(sec > 24)
//     {
//         slider.src = "Glasses/Slider/porshce-18 (1).jpg";
//     }
//     if(sec > 26)
//     {
//         slider.src = "Glasses/Slider/prada-6 (1).jpg";
//     }
//     if(sec > 28)
//     {
//         slider.src = "Glasses/Slider/versace-10 (1).jpg";
//     }
//     if(sec > 30)
//     {
//         slider.src = "Glasses/Slider/versace-11 (1).jpg";
//     }
//     if(sec > 32)
//     {
//         sec = 0;
//     }
    
// }
// setInterval(time, 1000);







function heart(a)
{
    if(a.id === "noHeart")
    {
        a.id = "heart";
    }
    else
    {
        if(a.id === "heart")
        {
            a.id = "noHeart";
        }
    }
}


function addToCart()  
{
    Swal.fire({
        title: "Your Address",
        text: "Enter Your Delivery Address",
        icon: "question",
        input: "text",
        confirmButtonColor: "#241c4f",
        cancelButtonColor: "#d33",

      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
        else
        {
            Swal.fire({
                title: "Thank's For Buying",
                        text: "Your product will be delivered to you shortly.",
                        icon: "success",
                        confirmButtonColor: "#241c4f",
              });
        }
      }
    });
   
}