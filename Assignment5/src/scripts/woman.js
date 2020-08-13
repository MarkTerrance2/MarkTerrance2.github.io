/*Function changes title of items to Womans T-shirts and appends all Woman items to the grid*/
function womanShirts() {
  wipePage();
  let gridReference = document.getElementById('subTitle');
  gridReference.textContent = "Women's T-Shirts";
  gridReference.style.textAlign = 'center';
  clothingItems.forEach(item => {
    if (item.category === 'woman') {
      makeItem(item);
    }
  });
}
