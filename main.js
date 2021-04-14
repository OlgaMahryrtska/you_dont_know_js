"use strict";
//Удалить рекламу со страницы
let advSpan = document.querySelector(".adv");
advSpan.remove();
//Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
let bookCollection = document.querySelectorAll(".books");
let books = document.querySelectorAll(".book");

//Восстановить порядок книг.
books[0].before(books[1]);
console.log(bookCollection);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);
console.log(books);

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let newTitle = books[4].childNodes[1];

let newTitleContent = (newTitle.childNodes[1].textContent =
  "Книга 3. this и Прототипы Объектов");

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
//book 2
let bookChapters = books[0].childNodes[3];
let bookchaptersItems = books[0].getElementsByTagName("li");
bookchaptersItems[10].before(bookchaptersItems[2]);
bookchaptersItems[8].before(bookchaptersItems[6]);
bookchaptersItems[2].after(bookchaptersItems[5]);
bookchaptersItems[3].after(bookchaptersItems[6]);

//book 5
let bookChapters5 = books[5].getElementsByTagName("li");
bookChapters5[1].after(bookChapters5[9]);
bookChapters5[5].after(bookChapters5[3]);
bookChapters5[8].after(bookChapters5[6]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let bookChapters8 = books[2].getElementsByTagName("li");
let newLi = document.createElement("li");
newLi.textContent = "Глава 8: За пределами ES6";
bookChapters8[8].after(newLi);
