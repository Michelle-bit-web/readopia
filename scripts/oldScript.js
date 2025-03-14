//   function renderImg(){

//     let bestSeller = books.filter(best => best.bestseller == true)
//     console.table(bestSeller)
//     for (let i = 0; i < bestSeller.length; i++) {
//     let coverBestSeller = bestSeller[i].cover;
//     document.getElementById(`best_seller${i+1}`).style.backgroundImage = `url('./assets/img/${coverBestSeller}.png')`;
//     currentImg = i;
//     }
//   }

//   let currentImg;

// function switchBestSeller(a){
//   let switchBestSeller = (books.filter(best => best.bestseller == true));
//   // for (let i = 0; i < switchBestSeller.length; i++) {
//   //   let coverBestSeller = bestSeller[i].cover;
//   //   document.getElementById(`best_seller${i+1}`).style.backgroundImage = `url('./assets/img/${coverBestSeller}.png')`;
//   //   }
//   if (a < 0 && currentImg == 1){
//    currentImg =(switchBestSeller.length);
//   }
//   else if (a < 0 && currentImg > 1){
//     currentImg = currentImg + 1;
//    }
//   else if (a > 0 && currentImg < (switchBestSeller.length)){
//     currentImg = currentImg - 1;
//   }
//   else if (a > 0 && currentImg == (switchBestSeller.length)){
//     currentImg = currentImg - (switchBestSeller.length + 1);
//   }
// document.getElementById(`best_seller${currentImg}`).style.backgroundImage = `url('./assets/img/${switchBestSeller[currentImg].cover}.png')`;
// }

// function renderNewAddition(){
//   let newAddition = books.filter(best => best.publishedYear > 2023)
//     console.table(newAddition)
//     for (let i = 0; i < newAddition.length; i++) {
//     let newBooks = newAddition[i].cover;
//     document.getElementById('div_new_books').innerHTML += `<div id= "newBook${i}" class="new_book">neues Buch x</div>`
//     document.getElementById(`newBook${i}`).style.backgroundImage = `url('./assets/img/${newBooks}.png')`;
//     }
// }

// //Book Page öffnen

// function openOverlay(genre){
//   if(genre == education){
//     let image = books.filter(image => image.genre == 'Education');
//     for (let indexEducation = 0; indexEducation < image.length; indexEducation++) {
//       getOverlayTemplate(indexEducation);
//       getOverlayImg(indexEducation, image)
//       // document.getElementById('education').innerHTML += getOverlayTemplate(indexEducation);
//       // getOverlayImg(indexEducation, image);
//     }
//   }
//   if(genre == health){
//     let image = books.filter(image => image.genre == 'Health & Fitness');
//     for (let indexHealth = 0; indexHealth < image.length; indexHealth++) {
//       getOverlayTemplate(indexHealth);
//       getOverlayImg(indexhealth, image)
//       // document.getElementById('health').innerHTML += getOverlayTemplate(indexHealth);
//       // getOverlayImg(indexHealth, image);
//     }
//   }
//   if(genre == romance){
//     let image = books.filter(image => image.genre == 'Romantik');
//     for (let indexRomance = 0; indexRomance < image.length; indexRomance++) {
//       getOverlayTemplate(indexRomance);
//       getOverlayImg(indexRomance, image)
//       // document.getElementById('romance').innerHTML += getOverlayTemplate(indexRomance);
//       // getOverlayImg(indexRomance, image);
//     }
//   }

//   if(genre == fantasy){
//     let image = books.filter(image => image.genre == 'Science-Fiction' || image.genre == 'Fantasy');
//     for (let indexFantasy = 0; indexFantasy < image.length; indexFantasy++) {
//       getOverlayTemplate(indexFantasy);
//       getOverlayImg(indexFantasy, image)
//       // document.getElementById('fantasy').innerHTML += getOverlayTemplate(indexFantasy);
//       // getOverlayImg(indexFantasy, image);
//     }
//   }

// }

// function getOverlayTemplate(index){
//   let overlay = document.getElementById('overlay');
//   overlay.classList.remove('d_none');
//   overlay.innerHTML = `
//       <div id="overlay_img${index} class="overlay">
//         <a id="link_bookpage${index}" href="bookPage.html" target="_blank">See more</a>
//         <button onclick="closeOverlay()">x</button>
//       <div>
//       <div id="btn_div" class="btn_overlay_div">
//          <button "id="btn_left" class="btn" onclick="switchImg(-1, event)"> << </button>
//          <button "id="btn_right" class="btn" onclick="switchImg(+1, event)" id="btn_right" class="btn"> >> </button>
//       </div>`;
//   currentImg = index;
// }

// function getOverlayImg(index, image){
//       let book = image[index].cover;
//       document.getElementById(`edImg${index}`).style.backgroundImage = overlayImg(book)
// }

// function overlayImg(book){
//   return `url('./assets/img/${book}.png')`
// }

// function closeOverlay(){
//   overlay.classList.add('d_none');
// }