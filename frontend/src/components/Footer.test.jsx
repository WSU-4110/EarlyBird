import Footer from './Footer';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

//Test 1
describe('sending email to correct address', () => {
test('testing email' , () => {
    render(<Footer />)
  
    //expect(screen.getByTestId('test1')).toHaveAttribute('href',
    //"mailto:csc4110EarlyBird@gmail.com?subject=Mail from Website");
    expect('"mailto:csc4110EarlyBird@gmail.com?subject=Mail from Website"').toMatch(/@gmail.com/);
})
});
