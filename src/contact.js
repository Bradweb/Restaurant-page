const contact = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Contact Us</h1>
    <p>Email: info@example.com</p>
    <p>Phone: 123-456-7890</p>
    <p>Address: 123 Main Street, Anytown, CA 12345</p>
  `;

  return div;
};

export default contact;