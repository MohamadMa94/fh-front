import { render, screen, fireEvent,waitFor, getByLabelText } from '@testing-library/react'
import Addtask from '../components/Addtask';
const mockedSetDurantion = jest.fn();
describe('Create a task test debug', () => {
    it('Debug',  () => {
      render(
          <Addtask />
      )
     screen.debug();
    })
})

describe('Test for create new task  ', () => {
  it(' new task',  () => {
    render(
        <Addtask />          
    )  
    const inputDescription = screen.getByPlaceholderText(/Description/i);
    fireEvent.change(inputDescription,{target: {value:"Med to venner"}})
  expect(inputDescription.value).toBe("Med to venner");
  
  const inputName = screen.getByPlaceholderText(/Name/i);
  fireEvent.change(inputName,{target: {value:"Går en tur"}})
  expect(inputName.value).toBe("Går en tur");

  })  })

  describe('Addtask test button', () => {
    it('Debug',  () => {
      render(
          <Addtask />      

      )
     screen.debug();
     const buttenW= screen.getByRole("button");
     expect(buttenW).toBeInTheDocument();
    })
})
describe('Button should be not disabled', () => {
  it('Debug',  () => {
    render(
        <Addtask />
    
    )
   screen.debug();
   const buttenW= screen.getByRole("button");
   expect(buttenW).not.toBeDisabled();
  })
})