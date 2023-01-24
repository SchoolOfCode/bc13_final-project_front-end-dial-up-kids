// __tests__/index.test.jsx

import { render, screen, userEvent } from '@testing-library/react'
import Home from '../pages/index.tsx'
import '@testing-library/jest-dom'
import SearchBar from '../components/SearchBar'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const image = screen.getByTestId('image')

    expect(image).toBeInTheDocument()
  })
})