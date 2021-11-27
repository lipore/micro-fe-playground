import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class AppElement extends HTMLElement {
  connectedCallback() {
    console.log("budget connected");
    this.render();
  }
  render() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this
    );
  }
}


window.customElements.define('budget-app', AppElement);