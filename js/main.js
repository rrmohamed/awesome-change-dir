const translations = {
  en : {
    // small nav
    call : "call+0111 028 9397" ,
    wishlist : "My Wishlist(3)" ,
    about : "About Us" , 
    contact : "Contact Us" ,
    login : "Login" ,
    links : "Links" , 

    //start main nav
    // links
    home : "Home" ,
    shop : "Shop" ,
    products : "Products" ,
    pages : "Pages" ,
    blog : "Blog" ,
    elements : "Elements" ,
    // mega menu
    withSidebar : "shop with sidebar",
    shopList : "Shop List" ,
    twoColoumn : "Shop Grid 2 Coloumn" ,
    threeColoumn : "Shop Grid 3 Coloumn" ,
    fourColoumn : "Shop Grid 4 Coloumn" ,
    noSidebar : "shop no sidebar" ,
    boxed : "Shop Boxed No Sidebar" ,
    cart : "Cart" ,
    checkout : "Checkout" ,
    myAccount : "My Account" ,
    lookbook : "Lookbook" ,
    last : "Last" ,
    chance : "Chance" ,
    sale : "Sale" ,
    // cart content
    Beige : "Beige knitted elastic" ,
    runner : "runner shoes" ,
    dollar : "1×84.00$" ,
    total : "Total" ,
    dollar2 : "160.00$" ,
    view : "View Car" ,
    //end main nav

    // landing
    topSale : "TopSale Collection" ,
    living : "Living Room Furniture" ,
    shop : "Shop Now" ,
    clearence : "Clearence" ,
    chairs : "Chairs & Chaises Up to 40% off",
    new : "New in" ,
    best : "Best Lighting Collection"
  } , 

  ar : {
    // small nav
    call : "اتصال+0111 028 9397" ,
    wishlist : "قائمة الامنيات(3)" ,
    about : "من نحن " , 
    contact : "تواصل معنا" ,
    login : "تسجيل الدخول" ,
    links : " روابط " ,


      //start main nav
    // links
    home : "الرئيسة" ,
    shop : "المتجر" ,
    products : "منتجات" ,
    pages : "صفحات" ,
    blog : "مقال" ,
    elements : "عناصر" ,
    // mega menu
    withSidebar : "تسوق مع الشريط الجانبي",
    shopList : "قائمة المتجر" ,
    twoColoumn : "شبكة المتجر 2 عمود" ,
    threeColoumn : "شبكة المتجر 3 أعمدة" ,
    fourColoumn : "شبكة المتجر 4 أعمدة" ,
    noSidebar : "تسوق بدون شريط جانبي" ,
    boxed : "متجر معلب بدون شريط جانبي" ,
    cart : "عربة" ,
    checkout : "الدفع" ,
    myAccount : "حسابي" ,
    lookbook : "كتاب البحث" ,
    last : "آخر" ,
    chance : "فرصة" ,
    sale : "أُوكَازيُون" ,
    // cart content
    Beige : "شريط مطاطي باللون البيج" ,
    runner : "أحذية عداء" ,
    dollar : "1×84.00$" ,
    total : "المجموع" ,
    dollar2 : "160.00$" ,
    view : "عرض السيارة" ,
    //end main nav


    // landing
    topSale : "مجموعة توب سيل" ,
    living : "أثاث غرفة المعيشة" ,
    shop : "تسوق الآن" ,
    clearence : "التخليص" ,
    chairs : " الكراسي بخصم يصل إلى 40%",
    new : "جديد في" ,
    best : "أفضل مجموعة الإضاءة"
  }
}


const offcanvas = document.querySelector(".offcanvas") ;
const cart_num = document.querySelector(".cart-num") ;
const cart_content = document.querySelector(".cart-content") ;
const arrow_icon = document.querySelectorAll(".landing .icon") ;
const info_position = document.querySelectorAll(".landing .box .info");
const search_icon = document.querySelector(".main-nav .search-content #search") ;
const languageSelector = document.querySelector("#lang") ;


languageSelector.addEventListener("change" , (e)=>{
  setLanguage(e.target.value) ;
  // localStorage.setItem("lang" , e.target.value) ;
}) ;

// document.addEventListener("DOMContentLoaded" , ()=>{
//   setLanguage(localStorage.getItem("lang")) ;
// });

const setLanguage = (language)=>{
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach((element) =>{
    const translationKey = element.getAttribute("data-i18n") ;
    element.textContent = translations[language][translationKey] ;
  }) ;

  if(language === "ar"){
    document.dir = "rtl" ;
    offcanvas.classList.remove("offcanvas-start");
    offcanvas.classList.add("offcanvas-end");
    cart_num.classList.remove("ms-2");
    cart_num.classList.add("me-2");
    cart_content.classList.remove("cart-position-en") ;
    cart_content.classList.add("cart-position-ar") ;
    info_position.forEach((info)=>{
      info.classList.remove("info-en");
      info.classList.add("info-ar");
    }) ;
    search_icon.classList.remove("me-4");
    search_icon.classList.add("ms-4");
  }else{
    document.dir = "ltr" ;
    offcanvas.classList.add("offcanvas-start");
    offcanvas.classList.remove("offcanvas-end");
    cart_num.classList.add("ms-2");
    cart_num.classList.remove("me-2");
    cart_content.classList.add("cart-position-en") ;
    cart_content.classList.remove("cart-position-ar") ;
    info_position.forEach((info)=>{
      info.classList.add("info-en");
      info.classList.remove("info-ar");
    });
    search_icon.classList.add("me-4");
    search_icon.classList.remove("ms-4");
  }
}


