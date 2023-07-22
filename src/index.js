// second version

/* // Import the modules
import homepage from './homepage';
import contact from './contact';
import menu from './menu';

const tabs = ['Homepage', 'Contact', 'Menu'];

const tabModules = [homepage, contact, menu];

const createTabElement = (tab, index, contentElement) => {
  const tabElement = document.createElement('button');
  tabElement.setAttribute('id', `tab-${index + 1}`);
  tabElement.textContent = tab;
  tabElement.addEventListener('click', () => loadTabContent(index, tabContentElement));
  contentElement.appendChild(tabElement);
  return tabElement;
};

const loadTabContent = (tabIndex, tabContentElement) => {
  tabContentElement.innerHTML = '';
  const moduleContent = tabModules[tabIndex]();
  tabContentElement.appendChild(moduleContent);
};

// Create the tab elements and tab content container
const contentElement = document.querySelector('#content');
const tabContentElement = document.createElement('div');
tabContentElement.id = 'tab-content';
document.body.appendChild(tabContentElement);

const tabElements = tabs.map((tab, index) => createTabElement(tab, index, contentElement));

// Set the homepage content as the initial content for the tab-content element
loadTabContent(0, tabContentElement);
// */

// Import the modules
import homepage from './homepage';
import contact from './contact';
import menu from './menu';

// Defining tabs and their corresponding modules
const tabs = ['Homepage', 'Contact', 'Menu'];
const tabModules = [homepage, contact, menu];

// Create the tab content container as a global variable
const tabContentElement = document.createElement('div');
tabContentElement.id = 'tab-content';
document.body.appendChild(tabContentElement);

// Function to create a single tab element
const createTabElement = (tab, index, contentElement) => {
  const tabElement = document.createElement('button');
  tabElement.setAttribute('id', `tab-${index + 1}`);
  tabElement.textContent = tab;
  tabElement.addEventListener('click', () => loadTabContent(index));
  contentElement.appendChild(tabElement);
  return tabElement;
};

// Function to load the content of a tab
const loadTabContent = (tabIndex) => {
  tabContentElement.innerHTML = '';
  const moduleContent = tabModules[tabIndex]();
  tabContentElement.appendChild(moduleContent);
};

// Function to initialize the tab elements
const initializeTabs = () => {
  const contentElement = document.querySelector('#content');

  tabs.forEach((tab, index) => {
    createTabElement(tab, index, contentElement);
  });

  // Set the homepage content as the initial content for the tab-content element
  loadTabContent(0);
};

// Call the initializeTabs function to set up the interface
initializeTabs();
