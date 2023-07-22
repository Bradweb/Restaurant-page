// contact.js
// This module defines a function 'contact' that creates and returns a DOM element representing the contact section of a restaurant page.

const contact = () => {
  // Create a new 'div' element to hold the content of the contact section
  const div = document.createElement('div');

  // Set the inner HTML of the 'div' element to the content of the contact section
  div.innerHTML = `
    <h1>Contact Us</h1>
    <p>Email: seafoodrestaurant@example.com</p>
    <p>Phone: +1 (123) 456-7890</p>
    <p>Address: 123 Ocean Avenue, Seaside, CA 12345</p>
  `;

  // Return the 'div' element representing the contact section
  return div;
};

// Export the 'contact' function as the default export of this module
export default contact;
