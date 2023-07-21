// menu.js
const menu = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Menu</h1>
    <ul>
      <li>Appetizers</li>
      <li>Entrees</li>
      <li>Desserts</li>
    </ul>
  `;

  return div;
};

export default menu;