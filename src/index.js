// create const URL 
const ramenUrl = 'http://localhost:3000/ramens';
// create const for div element 'ramen-menu'
const ramenMenu = document.getElementById('ramen-menu');

// Function to fetch and display existing ramens
function displayRamens() {
  fetch(ramenUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw 'Failed to fetch';
      }
    })
    .then((data) => {
      data.forEach((displayRamens) => {
        // create element for each image 
        const ramenImgs = document.createElement('img');
        ramenImgs.src = displayRamens.image;
        ramenMenu.appendChild(ramenImgs);

        // add click event listener to each image
        ramenImgs.addEventListener('click', () => {
          updateRamenDetail(displayRamens);
        });
      });

      // Attach submit event listener to the form
      addSubmitListener();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Function to update ramen detail section
function updateRamenDetail(displayRamens) {
  const ramenDetail = document.getElementById('ramen-detail');

  const newComment = document.getElementById('comment-display');
  newComment.textContent = displayRamens.comment;

  const newRating = document.getElementById('rating-display');
  newRating.textContent = displayRamens.rating;

  const detailImage = ramenDetail.getElementsByClassName('detail-image')[0];
  detailImage.src = displayRamens.image;
  detailImage.alt = displayRamens.name;

  const detailName = ramenDetail.getElementsByClassName('name')[0];
  detailName.textContent = displayRamens.name;

  const ramenRestaurant = ramenDetail.getElementsByClassName('restaurant')[0];
  if (ramenRestaurant) {
    ramenRestaurant.textContent = displayRamens.restaurant;
  }
}

// Function to handle form submission and add new ramen
function addSubmitListener() {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

     // Retrieve form input values using e.target.elements
    const newRamen = {
      image: e.target.elements['image'].value,
      restaurant: e.target.elements['restaurant'].value,
      name: e.target.elements['name'].value,
      rating: e.target.elements['rating'].value,
      comment: e.target.elements['new-comment'].value
    };

    // Create new image element for the new ramen
    const newRamenImg = document.createElement('img');
    newRamenImg.src = newRamen.image;
    ramenMenu.appendChild(newRamenImg);

    // Add click event listener to the new image
    newRamenImg.addEventListener('click', () => {
      updateRamenDetail(newRamen);
    });

    // Reset the form after submission
    form.reset();
  });
}

// Call displayRamens to initiate fetching and displaying existing ramens
displayRamens();

// newRamenForm.addEventListener('submit', YourRamen)

// function YourRamen(e) {
//   e.preventDefault()

//   const newRamen = {
//     name: e.target.name.value,
//     restaurant: e.target.restaurant.value,
//     image: e.target.image.value,
//     rating: e.target.rating.value,
//     comment: e.target['new-comment'].value,
//   }

// }


// // create const URL 
// const ramenUrl = 'http://localhost:3000/ramens'
// //create const for div element 'ramen-menu'
// const ramenMenu = document.getElementById('ramen-menu')
// //create const for data 
// // const displayRamens = (ramens) => {
// //   const ramenImgs = document.createElement('img')
// //   ramenImgs.src = displayRamens.image
// //   ramenMenu.append(ramenImgs)
// // }



// // fetch a request 
// fetch(`${ramenUrl}`)
// .then((res) => {
//   if(res.ok) {
//     return res.json()
// } else {
//   throw 'no'
// }
// })
// // create a forEach argument 
// .then((data) => {
//   data.forEach((displayRamens) => { 

//   // create element for each image 
//   // set attribute for each image 
//   // append each image inside element 'ramen-menu'
//   const ramenImgs = document.createElement('img')
//   ramenImgs.src = displayRamens.image
//   ramenMenu.appendChild(ramenImgs)

//    // add click event listener to each image
//    ramenImgs.addEventListener('click', () => {
   
//         // update ramen-detail div with ramen details
//     // create conts each element we are getting to edit (comment-display, rating-display, ramen-detail, detail-image, restaurant, detail-name)
//     // edit name/content inside each element 
  
   
//     // create a const for div element 'ramen-detail'
//     const ramenDetail = document.getElementById('ramen-detail')

//    const newComment = document.getElementById('comment-display')
//     newComment.textContent = displayRamens.comment

//     const newRating = document.getElementById('rating-display')
//     newRating.textContent = displayRamens.rating

//    const detailImage = ramenDetail.getElementsByClassName('detail-image')[0]
//   //  const detailImage = document.createElement('img')
//    detailImage.src = displayRamens.image
//    //detailImage.textContent = displayRamens.name
//    detailImage.alt = displayRamens.name
//    ramenDetail.append(detailImage)

//    const detailName = ramenDetail.getElementsByClassName('name')[0]
//    detailName.textContent = displayRamens.name
//    ramenDetail.append(detailName)

//    const ramenRestaraunt = ramenDetail.getElementsByClassName('restaurant')[0];
//    if (ramenRestaraunt) {
//    ramenRestaraunt.textContent = displayRamens.restaurant
//    }

// // create const for element id 'new-ramen'
// const form = document.getElementById('new-ramen');

// // Function to handle form submission
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Retrieve form input values
//   const newRamen = {
//     image: e.target.elements['image'].value,
//     restaurant: e.target.elements['restaurant'].value,
//     name: e.target.elements['name'].value,
//     rating: e.target.elements['rating'].value,
//     comment: e.target.elements['comment'].value
//   };

//   // Create new image element for the new ramen
//   const newRamenImg = document.createElement('img');
//   newRamenImg.src = newRamen.image;
//   ramenMenu.appendChild(newRamenImg);


//   // Logging form data to console 
//   console.log(newRamen);

//   // Reset the form after submission
//   form.reset();
// });




// })
    
//     })

//   });


  

  // create a submit add event listener 
  // add e.preventDefault() 
  // create a const for form element 'new-ramen'
  // create new element for 'new ramen' 
  // give it an (img, alt, name )
  // append a new elements to div element 'ramen-menu'
  

  // const form = document.getElementById('new-ramen')

  // form.addEventListener = ('submit', (e) => {
  //   e.preventDefault()

  //   const newRamen = {
  //     image: document.getElementById('image').value,
  //     restaurant: document.getElementById('restaurant').value,
  //     name: document.getElementById('name').value,
  //     rating: document.getElementById('rating').value,
  //     comment: document.getElementById('comment').value
  //   };
  //   form.append(newRamen) 
  //   form.reset();
  // })

    
  //   const newRamen = form.createElement('img')
  //   newRamen.className = 'new-ramen-image'
  //   newRamen.src = 
    

  // })


// const handleClick = () => {
    
// }

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//   // requests data from the server to get all ramen objects 
//   // display each image of the ramen
//   // append inside the element Id "ramen-menu"
// };

// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
