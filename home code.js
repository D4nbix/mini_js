let courses = [
      {
        CourseName: "HTML Attributes",
        category: "HTML",
        price: "30",
        image: "https://1.bp.blogspot.com/-BYDL4v8-bD4/XS7UEJB0r5I/AAAAAAAADlE/9Yq4Ynptv28u658I0so0tPp4CrAFR1QtwCLcBGAs/s1600/What%2Bis%2BHTML%2BAttributes.png",
      },
      {
        CourseName: "The Best Guide to PHP CRUD Operations",
        category: "PHP",
        price: "49",
        image: "https://webdevtrick.com/wp-content/uploads/crud-php-mysql.jpg",
      },
      {
        CourseName: "CSS selectors",
        category: "CSS",
        price: "99",
        image: "https://miro.medium.com/max/800/1*5ZsfcbvLC4nsqPYrkuVEPA.png",
      },
      {
        CourseName: "JavaScript Variables Lifecycles",
        category: "JS",
        price: "29",
        image: "https://blog.alexdevero.com/wp-content/uploads/2020/02/24-02-20-javascript-variables-pt1-blog.jpg",
      },
      {
        CourseName: "HTML Elements And Tags",
        category: "HTML",
        price: "129",
        image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_1518_1631724053.png",
      },
      {
        CourseName: "CSS Tutorial - Zero to Hero (Complete Course)",
        category: "CSS",
        price: "89",
        image: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
      },
      {
        CourseName: "PHP Operators with Examples - Tutorials Class",
        category: "PHP",
        price: "169",
        image: "https://itsourcecode.com/wp-content/uploads/2022/09/types-of-operators-in-php.png",
      },
      {
        CourseName: "Learn Advanced PHP Programming",
        category: "PHP",
        price: "49",
        image: "https://www.filepicker.io/api/file/aksXFpz9RqySTwkid7Tr",
      },
      {
        CourseName: "JavaScript Course: Syntax and Operators",
        category: "JS",
        price: "139",
        image: "http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/08/JavaScript-Operator.jpg",
      },
    ];

let products=document.getElementById("images");


for(let i=0;i<3;i++){
    let nbr=Math.floor(Math.random() * 9);
products.innerHTML+="<div class='photo'> <img src='"+courses[nbr].image+"'><p class='a'>"+courses.CourseName+"</p><p class='b'>"+courses[nbr].price+" $</p></div>";
}
