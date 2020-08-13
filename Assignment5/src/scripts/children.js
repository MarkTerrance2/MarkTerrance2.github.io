/*Function changes title of items to childrens T-shirts and appends all children items to the grid*/
function childrenShirts() {
  wipePage();
  let gridReference = document.getElementById('subTitle');
  gridReference.textContent = "Children's T-Shirts";
  gridReference.style.textAlign = 'center';
  clothingItems.forEach(item => {
    if (item.category === 'child') {
      makeItem(item);
    }
  });
}
