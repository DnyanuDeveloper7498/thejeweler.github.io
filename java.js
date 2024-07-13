
  let login =document.querySelector(".login-page");
  let content = document.querySelector(".pannel2");
  let contenar1= document.querySelector(".contenar");

  let templet = document.querySelector(".templet-contenar");

  
 let hr = document.querySelector(".hr1");


 let hr2 = document.querySelector(".hr2");


 let hr3 = document.querySelector(".hr3");


 let hr4 = document.querySelector(".hr4");

 let hr5 = document.querySelector(".hr5");

 let hr6 = document.querySelector(".hr6");
 let hr7 = document.querySelector(".hr7");
 let hr8 = document.querySelector(".hr8");



 
 let card1= document.querySelector(".card-product");
 
 //mangalsutra

let mangalsutra = document.querySelector(".mangalsutra");
let  mangalsutra2 = document.querySelector(".mangalsutra2");
let  mangalsutra3 = document.querySelector(".mangalsutra3");
let  mangalsutra4 = document.querySelector(".mangalsutra4");

//bangle

 let bangle = document.querySelector(".bangle");
 let bangle2 = document.querySelector(".bangle2");
 let bangle3 = document.querySelector(".bangle3");
 let bangle4 = document.querySelector(".bangle4");

 //  jhumkas

 let  jhumkas = document.querySelector(".jhumkas");
 let  jhumkas2 = document.querySelector(".jhumkas2");
 let  jhumkas3 = document.querySelector(".jhumkas3");
 let  jhumkas4 = document.querySelector(".jhumkas4");


//  necklace

 let  necklace = document.querySelector(".necklace");
 let  necklace2 = document.querySelector(".necklace2");
 let  necklace3 = document.querySelector(".necklace3");
 let  necklace4 = document.querySelector(".necklace4");

 //Chains 

 let chains1=document.querySelector(".Chains1");
 let chains2=document.querySelector(".Chains2");
 let chains3=document.querySelector(".Chains3");
 let chains4=document.querySelector(".Chains4");
 
    
//Rings1

let  Rings1=document.querySelector(".Rings1");
let  Rings2=document.querySelector(".Rings2");
let  Rings3=document.querySelector(".Rings3");
let  Rings4=document.querySelector(".Rings4");

//Anklets

let anklets1=document.querySelector(".Anklets1");
let anklets2=document.querySelector(".Anklets2");
let anklets3=document.querySelector(".Anklets3");
let anklets4=document.querySelector(".Anklets4");

//Bindiya

let bindiya1=document.querySelector(".Bindiya1");
let bindiya2=document.querySelector(".Bindiya2");
let bindiya3=document.querySelector(".Bindiya3");
let bindiya4=document.querySelector(".Bindiya4");

let viw = document.querySelector(".viw-btn");

let footer1 = document.querySelector(".footer");

let main=document.querySelector(".main-body");


window.addEventListener("popstate", detectHistory);


  function mangalsutras(){
     
    content.style.display="none";

    contenar1.style.display="none";


    templet.style.display="none";
     

    hr2.style.display="none";

    hr3.style.display="none";

    hr4.style.display="none";

    hr5.style.display="none";

    hr6.style.display="none";

    hr7.style.display="none";

    hr8.style.display="none";

    bangle.style.display="none";
    bangle2.style.display="none";
    bangle3.style.display="none";
    bangle4.style.display="none";

    
    jhumkas.style.display="none";
    jhumkas2.style.display="none";
    jhumkas3.style.display="none";
    jhumkas4.style.display="none";

    necklace.style.display="none";
    necklace2.style.display="none";
    necklace3.style.display="none";
    necklace4.style.display="none";

    
    mangalsutra2.style.display="flex";
    mangalsutra3.style.display="flex";
    mangalsutra4.style.display="flex";

    card1.style.display="none";

   viw.style.display="none";

   window.history.pushState({id:1},null,"?q=1234&u=beware");
   
  };

  function Expoler(){
     
    content.style.display="none";

    contenar1.style.display="none";


    templet.style.display="none";
     
    hr.style.display="none";
    hr2.style.display="none";

    hr3.style.display="none";

    hr4.style.display="none";

    hr5.style.display="none";

    hr6.style.display="none";

    hr7.style.display="none";

    hr8.style.display="none";

    bangle.style.display="none";
    bangle2.style.display="none";
    bangle3.style.display="none";
    bangle4.style.display="none";

    
    jhumkas.style.display="none";
    jhumkas2.style.display="none";
    jhumkas3.style.display="none";
    jhumkas4.style.display="none";

    necklace.style.display="none";
    necklace2.style.display="none";
    necklace3.style.display="none";
    necklace4.style.display="none";

    mangalsutra.style.display="none";
    mangalsutra2.style.display="none";
    mangalsutra3.style.display="flex";
    mangalsutra4.style.display="flex";

    card1.style.display="none";

   viw.style.display="none";

   window.history.pushState({id:1},null,"?q=1234&u=beware");
   
  };




   function login_p(){
    login.style.display="block";

   }
   function login_h(){
    login.style.display="none";

   }

 

   
    function cards()
    {
      card1.style.display="flex";
      content.style.display="none";
      contenar1.style.display="none";
      templet.style.display="none";

      hr.style.display="none";
      hr2.style.display="none";

      hr3.style.display="none";
  
      hr4.style.display="none";

      hr5.style.display="none";
      hr6.style.display="none";
      hr7.style.display="none";
      hr8.style.display="none";

      bangle.style.display="none";

    jhumkas.style.display="none";

    necklace.style.display="none";

    mangalsutra.style.display="none";

    viw.style.display="none";
    
    footer1.style.display="none";
    window.history.pushState({id:1},null,"?q=1234&u=beware");

    }




 function detectHistory ()
 {
  mangalsutra2.style.display="none";
  mangalsutra3.style.display="none";
  mangalsutra4.style.display="none";

  hr5.style.display="none";
  hr6.style.display="none";
  hr7.style.display="none";
  hr8.style.display="none";

  bangle2.style.display="none";
  bangle3.style.display="none";
  bangle4.style.display="none";
  

  necklace2.style.display="none";
  necklace3.style.display="none";
  necklace4.style.display="none";

  jhumkas2.style.display="none";
  jhumkas3.style.display="none";
  jhumkas4.style.display="none";

  Rings1.style.display="none";
  Rings2.style.display="none";
  Rings3.style.display="none";
  Rings4.style.display="none";

  chains1.style.display="none";
  chains2.style.display="none";
  chains3.style.display="none";
  chains4.style.display="none";

  anklets1.style.display="none";
  anklets2.style.display="none";
  anklets3.style.display="none";
  anklets4.style.display="none";

  bindiya1.style.display="none";
  bindiya2.style.display="none";
  bindiya3.style.display="none";
  bindiya4.style.display="none";
  
  card1.style.display="none";
  mangalsutra.style.display="flex";

  content.style.display="flex";

  contenar1.style.display="flex";

  templet.style.display="flex";
   
  hr.style.display="block";
  hr2.style.display="block";

  hr3.style.display="block";

  hr4.style.display="block";

  bangle.style.display="flex";

  jhumkas.style.display="flex";

  necklace.style.display="flex";
  
  viw.style.display="block";


  footer1.style.display="block";
 }
     


  function bangles()
  {
    content.style.display="none";


    contenar1.style.display="none";

    templet.style.display="none";
     

    hr2.style.display="none";

    hr3.style.display="none";

    hr4.style.display="none";

    hr5.style.display="none";
    hr6.style.display="none";
    hr7.style.display="none";
    hr8.style.display="none";

    bangle.style.display="flex";
    bangle2.style.display="flex";
    bangle3.style.display="flex";
    bangle4.style.display="flex";

    jhumkas.style.display="none";
    jhumkas2.style.display="none";
    jhumkas3.style.display="none";
    jhumkas4.style.display="none";

    necklace.style.display="none";
    necklace2.style.display="none";
    necklace3.style.display="none";
    necklace4.style.display="none";


    mangalsutra.style.display="none";
    mangalsutra2.style.display="none";
    mangalsutra3.style.display="none";
    mangalsutra4.style.display="none";

    hr.style.display="none";

    hr2.style.display="block";
   
    window.history.pushState({id:1},null,"?q=1234&u=beware");
  }

  function  jhumka(){
     
    content.style.display="none";

    contenar1.style.display="none";


    templet.style.display="none";
     
    hr.style.display="none";
    hr2.style.display="none";

    hr3.style.display="block";

    hr4.style.display="none";
    hr5.style.display="none";
    hr6.style.display="none";
    hr7.style.display="none";
    hr8.style.display="none";

    bangle.style.display="none";
    bangle2.style.display="none";
    bangle3.style.display="none";
    bangle4.style.display="none";

    
    jhumkas.style.display="flex";
    jhumkas2.style.display="flex";
    jhumkas3.style.display="flex";
    jhumkas4.style.display="flex";

    necklace.style.display="none";
    necklace2.style.display="none";
    necklace3.style.display="none";
    necklace4.style.display="none";

    mangalsutra.style.display="none";
    mangalsutra2.style.display="none";
    mangalsutra3.style.display="none";
    mangalsutra4.style.display="none";

    card1.style.display="none";

   viw.style.display="none";

   window.history.pushState({id:1},null,"?q=1234&u=beware");
   
  };



  function  necklac(){
     
    content.style.display="none";

    contenar1.style.display="none";


    templet.style.display="none";
     
    hr.style.display="none";
    hr2.style.display="none";

    hr3.style.display="none";

    hr4.style.display="block";
    hr5.style.display="none";
    hr6.style.display="none";
    hr7.style.display="none";
    hr8.style.display="none";

    bangle.style.display="none";
    bangle2.style.display="none";
    bangle3.style.display="none";
    bangle4.style.display="none";

    
    jhumkas.style.display="none";
    jhumkas2.style.display="none";
    jhumkas3.style.display="none";
    jhumkas4.style.display="none";

    necklace.style.display="flex";
    necklace2.style.display="flex";
    necklace3.style.display="flex";
    necklace4.style.display="flex";

    mangalsutra.style.display="none";
    mangalsutra2.style.display="none";
    mangalsutra3.style.display="none";
    mangalsutra4.style.display="none";

    card1.style.display="none";

   viw.style.display="none";

   window.history.pushState({id:1},null,"?q=1234&u=beware");
   
  };

  
  //search


  let searchBox = document.querySelector('#myInput');
  let sections = document.querySelectorAll('.content-contener'); // Sections containing images
  
  searchBox.addEventListener('input', () => {
    const value = searchBox.value.toLowerCase();
  
    if (value === '') {
      // Display all images when the search box is cleared
      sections.forEach((section) => {
        const images = section.querySelectorAll('.img-box');
        images.forEach((image) => {
          image.style.display = 'block';
 

          content.style.display="flex";
          contenar1.style.display="flex";
            
          templet.style.display="flex";
           
          hr.style.display="block";

          hr2.style.display="block";
      
          hr3.style.display="block";
      
          hr4.style.display="block";
          viw.style.display="block";

          hr5.style.display="none";
          hr6.style.display="none";
          hr7.style.display="none";
          hr8.style.display="none";

          mangalsutra2.style.display="none";
          mangalsutra3.style.display="none";
          mangalsutra4.style.display="none";

          bangle2.style.display="none";
          bangle3.style.display="none";
          bangle4.style.display="none";

          jhumkas2.style.display="none";
          jhumkas3.style.display="none";
          jhumkas4.style.display="none";

          necklace2.style.display="none";
          necklace3.style.display="none";
          necklace4.style.display="none";

        

        });
        section.style.display = 'flex';

        necklace4.style.display="none";

        Rings1.style.display="none";
        Rings2.style.display="none";
        Rings3.style.display="none";
        Rings4.style.display="none";

        chains1.style.display="none";
       chains2.style.display="none";
        chains3.style.display="none";
         chains4.style.display="none";

         anklets1.style.display="none";
         anklets2.style.display="none";
         anklets3.style.display="none";
         anklets4.style.display="none";

          bindiya1.style.display="none";
          bindiya2.style.display="none";
          bindiya3.style.display="none";
          bindiya4.style.display="none";
      });
    } else {
      // Perform the search as you were doing before

      sections.forEach((section) => {
        const images = section.querySelectorAll('.img-box');
        let showSection = false;
  
        images.forEach((image) => {
          const title = image.getAttribute('data-name').toLowerCase();
          if (title.includes(value)) {
            showSection = true;
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
           

          }
        });
  
        // Show or hide the entire section based on the search result
        if (showSection) {
          section.style.display = 'flex';

        } else {
          section.style.display = 'none';

          content.style.display="none";


                contenar1.style.display="none";
            
                templet.style.display="none";
                 
            
                hr2.style.display="none";
        
                hr.style.display="none";
            
                hr3.style.display="none";

               
                hr5.style.display="none";
                hr6.style.display="none";
                hr7.style.display="none";
                hr8.style.display="none";
            
                hr4.style.display="none";
                viw.style.display="none";

               
        
        }
      });
    }
  });
  







// product card javascript 

        function clk(newImg)
        {
          let getImg=document.getElementById("imgd");
          getImg.src=newImg.src;
        }
        
    $(document).ready(function(){

     $(".big_img").imagezoomsl({

        zoomrange:[2.5,2.5]
        
     });
    });

    $(document).ready(function(){
      
      $(".small_img").hover(function(){

        $(".big_img").attr('src',$(this).attr('src')); 

      });


    }); 


//  product javascript end 


  // More than products  


   

  
  function viw_btn()
  {
    content.style.display="flex";

    contenar1.style.display="flex";


    templet.style.display="flex";
     
    hr.style.display="block";
    hr2.style.display="block";

    hr3.style.display="block";

    hr4.style.display="block";

    hr5.style.display="block";

    hr6.style.display="block";
    hr7.style.display="block";
    hr8.style.display="block";

    bangle.style.display="flex";
    bangle2.style.display="none";
    bangle3.style.display="none";
    bangle4.style.display="none";

    
    jhumkas.style.display="flex";
    jhumkas2.style.display="none";
    jhumkas3.style.display="none";
    jhumkas4.style.display="none";

    necklace.style.display="flex";
    necklace2.style.display="none";
    necklace3.style.display="none";
    necklace4.style.display="none";

    mangalsutra.style.display="flex";
    mangalsutra2.style.display="none";
    mangalsutra3.style.display="none";
    mangalsutra4.style.display="none";

    Rings1.style.display="flex";
    Rings2.style.display="none";
    Rings3.style.display="none";
    Rings4.style.display="none";

    chains1.style.display="flex";
  chains2.style.display="none";
  chains3.style.display="none";
  chains4.style.display="none";

  anklets1.style.display="flex";
  anklets2.style.display="none";
  anklets3.style.display="none";
  anklets4.style.display="none";

  bindiya1.style.display="flex";
  bindiya2.style.display="none";
  bindiya3.style.display="none";
  bindiya4.style.display="none";









    card1.style.display="none";

    


   viw.style.display="none";

   window.history.pushState({id:1},null,"?q=1234&u=beware");

 
    

  }

// chains function

function Chains()
{
  content.style.display="none";

  contenar1.style.display="none";


  templet.style.display="none";
   
  hr.style.display="none";
  hr2.style.display="none";

  hr3.style.display="none";

  hr4.style.display="none";

  hr5.style.display="none";
  hr6.style.display="none";
  hr7.style.display="none";
  hr8.style.display="none";

  bangle.style.display="none";
  bangle2.style.display="none";
  bangle3.style.display="none";
  bangle4.style.display="none";

  
  jhumkas.style.display="none";
  jhumkas2.style.display="none";
  jhumkas3.style.display="none";
  jhumkas4.style.display="none";

  necklace.style.display="none";
  necklace2.style.display="none";
  necklace3.style.display="none";
  necklace4.style.display="none";

  mangalsutra.style.display="none";
  mangalsutra2.style.display="none";
  mangalsutra3.style.display="none";
  mangalsutra4.style.display="none";

  Rings1.style.display="none";
  anklets1.style.display="none";
  bindiya1.style.display="none";
  
 

   hr5.style.display="block";
  chains1.style.display="flex";
  chains2.style.display="flex";
  chains3.style.display="flex";
  chains4.style.display="flex";

  card1.style.display="none";

  


 viw.style.display="none";

 window.history.pushState({id:1},null,"?q=1234&u=beware");


}
//ringse
  
  function Ringse()
  {
    content.style.display="none";

    contenar1.style.display="none";


    templet.style.display="none";
     
    hr.style.display="none";
    hr2.style.display="none";

    hr3.style.display="none";

    hr4.style.display="none";

    hr5.style.display="none";
    hr6.style.display="none";
    hr7.style.display="none";
    hr8.style.display="none";

    bangle.style.display="none";
    bangle2.style.display="none";
    bangle3.style.display="none";
    bangle4.style.display="none";

    
    jhumkas.style.display="none";
    jhumkas2.style.display="none";
    jhumkas3.style.display="none";
    jhumkas4.style.display="none";

    necklace.style.display="none";
    necklace2.style.display="none";
    necklace3.style.display="none";
    necklace4.style.display="none";

    mangalsutra.style.display="none";
    mangalsutra2.style.display="none";
    mangalsutra3.style.display="none";
    mangalsutra4.style.display="none";

    Rings1.style.display="flex";
    Rings2.style.display="flex";
    Rings3.style.display="flex";
    Rings4.style.display="flex";

    card1.style.display="none";

    


   viw.style.display="none";

   window.history.pushState({id:1},null,"?q=1234&u=beware");


  }

  //Anklets


  function anklets()
{
  content.style.display="none";

  contenar1.style.display="none";


  templet.style.display="none";
   
  hr.style.display="none";
  hr2.style.display="none";

  hr3.style.display="none";

  hr4.style.display="none";

  hr5.style.display="none";
  hr6.style.display="none";
  hr7.style.display="none";
  hr8.style.display="none";

  bangle.style.display="none";
  bangle2.style.display="none";
  bangle3.style.display="none";
  bangle4.style.display="none";

  
  jhumkas.style.display="none";
  jhumkas2.style.display="none";
  jhumkas3.style.display="none";
  jhumkas4.style.display="none";

  necklace.style.display="none";
  necklace2.style.display="none";
  necklace3.style.display="none";
  necklace4.style.display="none";

  mangalsutra.style.display="none";
  mangalsutra2.style.display="none";
  mangalsutra3.style.display="none";
  mangalsutra4.style.display="none";

  Rings1.style.display="none";
  anklets1.style.display="flex";
  anklets2.style.display="flex";
  anklets3.style.display="flex";
  anklets4.style.display="flex";

  bindiya1.style.display="none";
  
 

   hr7.style.display="block";
  chains1.style.display="none";
  

  card1.style.display="none";

  


 viw.style.display="none";

 window.history.pushState({id:1},null,"?q=1234&u=beware");


}


//Bindiya

function bindiyas()
{
  content.style.display="none";

  contenar1.style.display="none";


  templet.style.display="none";
   
  hr.style.display="none";
  hr2.style.display="none";

  hr3.style.display="none";

  hr4.style.display="none";

  hr5.style.display="none";
  hr6.style.display="none";
  hr7.style.display="none";
  hr8.style.display="none";

  bangle.style.display="none";
  bangle2.style.display="none";
  bangle3.style.display="none";
  bangle4.style.display="none";

  
  jhumkas.style.display="none";
  jhumkas2.style.display="none";
  jhumkas3.style.display="none";
  jhumkas4.style.display="none";

  necklace.style.display="none";
  necklace2.style.display="none";
  necklace3.style.display="none";
  necklace4.style.display="none";

  mangalsutra.style.display="none";
  mangalsutra2.style.display="none";
  mangalsutra3.style.display="none";
  mangalsutra4.style.display="none";

  Rings1.style.display="none";
  anklets1.style.display="none";

  bindiya1.style.display="flex";
  bindiya2.style.display="flex";
  bindiya3.style.display="flex";
  bindiya4.style.display="flex";
  
 

   hr8.style.display="block";
  chains1.style.display="none";
  

  card1.style.display="none";

  


 viw.style.display="none";

 window.history.pushState({id:1},null,"?q=1234&u=beware");

}


// login page 

let loging = document.querySelector(".loging-pages");

    function login_pages() {
      loging.style.display = "block";
    }

    function close_se() {
      loging.style.display = "none";
      login.style.display="none";
    }

    function validateForm(event) {
      event.preventDefault();

      var mobileNumberInput = document.getElementById("log-tel");
      var userError = document.getElementById("userError");

      var mobileNumber = mobileNumberInput.value.trim();

      if (mobileNumber === "") {
        userError.innerHTML = "Mobile Number is empty";
        return false;
      }

      if (mobileNumber.length < 10) {
        userError.innerHTML = "Mobile Number requires a minimum of 10 digits";
        return false;
      }

      if (!/^\d+$/.test(mobileNumber)) {
        userError.innerHTML = "Mobile Number must contain only digits";
        return false;
      }

      userError.innerHTML = "";

      
      alert("Form submitted successfully"); 
      document.getElementById("yourFormId").reset(); 
    }