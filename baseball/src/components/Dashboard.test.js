import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';

describe("<Dashboard />", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Dashboard />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders without errors', () => {
      const queries = render(<Dashboard />); //test fails when there are errors rendering the component
    });
  
    it('renders the text properly', () => {
      const { getByText } = render(<Dashboard />);
      getByText(/controller/i);
    });

    describe('Strike Button', () => {
        it('increments state.strikes', () => {
            const { getByText, queryByText} = render(<Dashboard />);
            const button = getByText(/strike/i);
            fireEvent.click(button);
            expect(queryByText(/Count: 0-1/i)).toBeTruthy();
        })
    })

    describe('Ball Button', () => {
        it('increments state.balls', () => {
            const { getByText, queryByText} = render(<Dashboard />);
            const button = getByText(/ball/i);
            fireEvent.click(button);
            expect(queryByText(/Count: 1-0/i)).toBeTruthy();
        })
    })
  });