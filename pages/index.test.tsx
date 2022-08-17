import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders a main', () => {
    render(<Home />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
