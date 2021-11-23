import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import TechInterview from './TechInterview';

//Test 2
describe('in Technical Interview tab', () => {
    test('Tab?' , () => {
        render(<TechInterview />)
      
        expect(screen.getByText('Technical Interviews'));
    })
    });
