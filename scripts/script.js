var menu = document.getElementById("bar");
var items = document.getElementById("items");

items.style.right ="-300px";

menu.onclick = function () {
  if (items.style.right == '-300px'){
    items.style.right = '0';
  }else{
    items.style.right = '-300px';
  }
}
