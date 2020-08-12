window.onload = () => {
  /*When men drop down t-shirt option is selected it pulls up all mens t-shirts*/
  let menButton = document.getElementById('men_1');
  menButton.addEventListener('click', menShirts);

  /*When woman drop down t-shirt option is selected it pulls up all mens t-shirts*/
  let womanButton = document.getElementById('woman_1');
  womanButton.addEventListener('click', womanShirts);

  /*When children drop down t-shirt option is selected it pulls up all mens t-shirts*/
  let childButton = document.getElementById('child_1');
  childButton.addEventListener('click', childrenShirts);

  /*When  Men's T-shirts slide is clicked on it pulls up all mens t-shirts*/
  let menSlideImage = document.getElementById('menSlide');
  menSlideImage.addEventListener('click', menShirts);

  /*When Woman's T-shirts slide is clicked on it pulls up all womans t-shirts*/
  let womanSlideImage = document.getElementById('womanSlide');
  womanSlideImage.addEventListener('click', womanShirts);
  /*When  Children's T-shirts slide is clicked on it pulls up all children t-shirts*/
  let childSlideImage = document.getElementById('childrenSlide');
  childSlideImage.addEventListener('click', childrenShirts);
};
