import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';


describe("<App />", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Display />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders without errors', () => {
      const queries = render(<Display />); //test fails when there are errors rendering the component
    });
  
    it('renders the text properly', () => {
      const { getByText } = render(<Display balls={0} strikes={0}/>);
      getByText(/Count:/i);
    });
  });