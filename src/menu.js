// menu.js
// This module defines a function 'menu' that creates and returns a DOM element representing the menu section of a seafood restaurant page.

const menu = () => {
  // Create a new 'div' element to hold the content of the menu section
  const div = document.createElement('div');

  // Set the inner HTML of the 'div' element to the content of the menu section
  div.innerHTML = `
    <h1>Our Menu</h1>
    <ul>
      <li>Grilled Octopus</li>
      <li>Shrimp Scampi</li>
      <li>Lobster Thermidor</li>
      <li>Clam Linguine</li>
      <li>Seafood Paella</li>
      <li>Crab Cakes</li>
    </ul>
  `;

  // Return the 'div' element representing the menu section
  return div;
};

// Export the 'menu' function as the default export of this module
export default menu;
