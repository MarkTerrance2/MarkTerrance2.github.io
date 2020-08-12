/*Function changes title of items to Men T-shirts and appends all Men items to the grid*/
function menShirts() {
  //Wipes entire grid if there is one and creates a new one
  wipePage();

  //Updates Title to Men's T-shirts
  let gridReference = document.getElementById('subTitle');
  gridReference.textContent = "Men's T-Shirts";
  gridReference.style.textAlign = 'center';

  //For each object in clothing items that has the category of men, creates a grid item
  clothingItems.forEach(item => {
    if (item.category === 'men') {
      makeItem(item);
    }
  });
}
