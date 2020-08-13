/*Pass entire clothing items array of object to create an item*/
function makeItem(clothingItems) {
  /*Create reference to grid*/
  let clothingTable = document.getElementById('gridTable');
  /*Append a (item)div to the grid*/
  let clothingItem = clothingTable.appendChild(document.createElement('div'));
  /*Changes the divs class name to grid-item*/
  clothingItem.className = 'grid-item';
  /*Appends an image to the grid-item*/
  let clothingImage = clothingItem.appendChild(document.createElement('img'));
  /*Sets the src of the image to the one stored in the object member*/
  clothingImage.src = clothingItems.src;
  /*Sets maximum width of the image*/
  clothingImage.style.maxWidth = '250px';
  /*Sets maximum height of the image*/
  clothingImage.height = 400;
  /*Aligns image in the center of the grid-item*/
  clothingImage.style.alignContent = 'center';
  /*Makes corners of image round*/
  clothingImage.style.borderRadius = '20px';

  /*Passes the Item once the image is added and array of the objects properties*/
  addItem(clothingItem, [clothingItems.name, clothingItems.price]);
  /*When image is clicked on use its contents for the modal and call function*/
  clothingImage.addEventListener('click', () => imageClicked(clothingImage, clothingItems.desc));
}

/*For each of the objects contents creates a div with the text content of it*/
function addItem(row, itemData) {
  itemData.forEach(singleItemData => {
    if (singleItemData[0]) {
      row.appendChild(document.createElement('div')).textContent = singleItemData;
    } else {
      row.appendChild(document.createElement('div')).innerHTML = 'Price: $' + singleItemData;
    }
  });
  /*Appends button the the grid-item*/
  let cartButton = row.appendChild(document.createElement('button'));
  /*Names button add to cart*/
  cartButton.textContent = 'Add To Cart';
  /*Changes color of add to cart button*/
  cartButton.style = 'background-color:#008CBA;';
}
//eslint-disable-next-line no-unused-vars
function wipePage() {
  /*Creates reference to the grid*/
  let grid = document.getElementById('gridTable');
  /*Creates reference to the slide/carousel*/
  let carousel = document.getElementById('myCarousel');
  /*Removes entire grid from existance because we want to make a new one*/
  grid.childNodes.forEach(node => {
    grid.remove(node);
  });
  /*Removes entire slideshow from existance because we are no longer on the homepage*/
  carousel.childNodes.forEach(node => {
    carousel.remove(node);
  });

  //References grid container and appends a new (grid)div to it
  let newGrid = document.getElementById('grid').appendChild(document.createElement('div'));
  //Sets class name of grid back to what it had before it was deleted
  newGrid.className = 'grid-container';
  //Sets the new grids id back to what it had before it was deleted
  newGrid.id = 'gridTable';

  //References Slide/Carousel container and appends a new (carousel)div to it
  let newCarousel = document
    .getElementById('homeCarousel')
    .appendChild(document.createElement('div'));
  //Sets class name of carousel back to what it had before it was deleted
  newCarousel.className = 'carousel slide';
  //Sets id of carousel back to what it had before it was deleted
  newCarousel.id = 'myCarousel';
}

//Function for setting image Modals
//eslint-disable-next-line no-unused-vars
function imageClicked(itemImage, itemDesc) {
  let modal = document.getElementById('myModal');
  let modalImg = document.getElementById('modalImg');
  let captionText = document.getElementById('caption');
  let span = document.getElementById('closed');

  modalImg.src = itemImage.src;
  captionText.innerHTML = itemDesc;
  modal.style.display = 'flex';
  modalImg.style.width = '300px';
  modalImg.style.height = '500px';
  modalImg.style.paddingTop = '20px';

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
