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
        it('resets the count to 0 when there are 3 strikes', () => {
            const { getByText, queryByText} = render(<Dashboard />);
            const button = getByText(/strike/i);
            fireEvent.click(button);
            fireEvent.click(button);
            fireEvent.click(button);
            expect(queryByText(/Count: 0-0/i)).toBeTruthy();
        })
    })

    describe('Ball Button', () => {
        it('increments state.balls', () => {
            const { getByText, queryByText} = render(<Dashboard />);
            const button = getByText(/ball/i);
            fireEvent.click(button);
            expect(queryByText(/Count: 1-0/i)).toBeTruthy();
        })
        it('resets the count to 0 when 4 balls are thrown', () => {
                const { getByText, queryByText} = render(<Dashboard />);
                const button = getByText(/ball/i);
                fireEvent.click(button);
                fireEvent.click(button);
                fireEvent.click(button);
                fireEvent.click(button);
                expect(queryByText(/Count: 0-0/i)).toBeTruthy();
        })
    })
    describe('Foul button', () => {
        it('increments state.strikes', () => {
            const { getByText, queryByText } = render(<Dashboard />);
            const button = getByText(/foul/i);
            fireEvent.click(button);
            expect(queryByText(/Count: 0-1/i)).toBeTruthy();
        })
        it("it doesn't surpass 2 strikes", () => {
            const { getByText, queryByText } = render(<Dashboard />);
            const button = getByText(/foul/i);
            fireEvent.click(button);
            fireEvent.click(button);
            fireEvent.click(button);
            fireEvent.click(button);
            expect(queryByText(/Count: 0-2/i)).toBeTruthy();
        })
    })
    describe('Hit button', () => {
        it('resets the count', () => {
            const { getByText, queryByText } = render(<Dashboard />);
            const hit = getByText(/hit/i);
            const strike = getByText(/strike/i);
            fireEvent.click(strike); //count 0-1
            fireEvent.click(strike); //count 0-2
            fireEvent.click(hit); // count reset
            expect(queryByText(/Count: 0-0/i)).toBeTruthy();
        })
    })
  });