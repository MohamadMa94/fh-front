import { render, screen, fireEvent,waitFor, getByLabelText } from '@testing-library/react'
import Changepassword from '../components/Changepassword';
describe('ChangePassword a password test debug', () => {
    it('Debug',  () => {
      render(
          <Changepassword />
      )
     screen.debug();
    })
})

describe('Test for ChangePassword a password, description  ', () => {
  it(' description',  () => {
    render(
        <Changepassword />
          
    )  
   
    const input1 = screen.getByPlaceholderText(/New password/i);
    fireEvent.change(input1,{target: {value:"dasdffsfdasd"}})
    expect(input1.value).toBe("dasdffsfdasd");
  
  const input2 = screen.getByPlaceholderText(/Old password/i);
  fireEvent.change(input2,{target: {value:"fasfsawwqweqwe2244"}})
  expect(input2.value).toBe("fasfsawwqweqwe2244");
  })  })

  describe('Changepassword test button', () => {
    it('Debug',  () => {
      render(
          <Changepassword />

       

      )
     screen.debug();
     const buttenW= screen.getByRole("button");
     expect(buttenW).toBeInTheDocument();
    })
})
describe('Button should be not disabled', () => {
  it('Debug',  () => {
    render(
        <Changepassword />
    
    )
   screen.debug();
   const buttenW= screen.getByRole("button");
   expect(buttenW).not.toBeDisabled();
  })
})