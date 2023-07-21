import restaurantImage from './images/cocido-gallego.jpg';

// This function creates the homepage content
const homepage = () => {

  // Create a new div element
  const div = document.createElement('div');

  // Set the inner HTML of the div element to the homepage content
  div.innerHTML = `
  <h1>Restaurante el gallego!</h1>
  <img src="${restaurantImage}" alt="Restaurant image" style="width: 500px; height: auto;">
  <p>El mejor marisco!</p>
`;


  // Return the div element
  return div;
};

// Export the homepage function
export default homepage;

// Comments:

// This function creates the homepage content.
// It creates a new div element and sets its inner HTML to the homepage content.
// The homepage content includes an h1 element, an img element, and a p element.
// The function returns the div element.
// The homepage function is exported so that it can be used in other parts of the code.
