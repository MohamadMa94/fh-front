import { render, screen, fireEvent,waitFor, getByLabelText } from '@testing-library/react'
import SignUp from '../components/SignUp';

describe('SignUp test debug', () => {
    it('renders a heading', async () => {
      render(
          <SignUp />
            )
     screen.debug();
    })
})

describe('Test inserts Name Sign Up', () => {
    it(' Name',  () => {
      render(
          <SignUp />
            
      )

      
     fireEvent.change(screen.getByPlaceholderText("Name"),{target: {value:'Mette'}})
    expect(screen.getByPlaceholderText("Name")).toHaveAttribute('value','Mette')
    
    })
    
  })

  describe('test inserts  Password Sign Up', () => {
    it(' Password',  () => {
      render(
          <SignUp />
            
      )

   
     fireEvent.change(screen.getByPlaceholderText("Password"),{target: {value:'klasd5666'}})
    expect(screen.getByPlaceholderText("Password")).toHaveAttribute('value','klasd5666')
    
    })
    
  })


/*   describe('Test inserts  Email Sign Up ', () => {
    it(' Email',  () => {
      render(
          <SignUp />
            
      )

   
     fireEvent.change(screen.getByPlaceholderText("Email"),{target: {value:'maher@gmail.com'}})
    expect(screen.getByPlaceholderText("Email")).toHaveAttribute('value','maher@gmail.com')
    
    })
    
  }) */

  describe('value for Name ,Email , Password by ID ', () => {
    it('Name, Email , Password', async () => {
      render(
          <SignUp />
                 )

    screen.debug();
      screen.getByPlaceholderText("Email")
      screen.getByPlaceholderText("Password")
      screen.getByPlaceholderText("Name")

    })
    
  })
