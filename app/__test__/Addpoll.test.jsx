import { render, screen, fireEvent,waitFor, getByLabelText } from '@testing-library/react'
import AddPoll from '../components/AddPoll';
const mockedSetDurantion = jest.fn();
describe('Create a poll test debug', () => {
    it('Debug',  () => {
      render(
          <AddPoll />
      )
     screen.debug();
    })
})

describe('Test for create new poll, description  ', () => {
  it(' description',  () => {
    render(
        <AddPoll />          
    )  
  
  const inputWorkout = screen.getByPlaceholderText(/Name/i);
  fireEvent.change(inputWorkout,{target: {value:"en rejse til madridad"}})
  expect(inputWorkout.value).toBe("en rejse til madridad");
  })  })

  describe('AddPoll test button', () => {
    it('Debug',  () => {
      render(
          <AddPoll />

       

      )
     screen.debug();
     const buttenW= screen.getByRole("button");
     expect(buttenW).toBeInTheDocument();
    })
})
describe('Button should be not disabled', () => {
  it('Debug',  () => {
    render(
        <AddPoll />
    
    )
   screen.debug();
   const buttenW= screen.getByRole("button");
   expect(buttenW).not.toBeDisabled();
  })
})