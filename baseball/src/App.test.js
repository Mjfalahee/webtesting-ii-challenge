import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';


describe("<App />", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<App />); //test fails when there are errors rendering the component
  });

  it('renders the text properly', () => {
    const { getByText } = render(<App />);
    getByText(/let's play/i);
  });
});