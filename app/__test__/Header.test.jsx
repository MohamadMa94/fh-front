import { render, screen, fireEvent,waitFor, getByLabelText } from '@testing-library/react'

import Header from '../components/Header'

describe('Header test', () => {
    it('Header',  () => {
      render(
          <Header />      
      )     
  
     screen.debug();
    }) })
 