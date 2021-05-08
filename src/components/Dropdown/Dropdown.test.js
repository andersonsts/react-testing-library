import Dropdown from './'

import { screen, render, userEvent } from '../../tests'

const title = 'Selecione Pokemon'
const options = ['Bulbarsour','Squirtle','Charizard']

describe('Dropdown', () => {
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />)
    
    options.forEach(option => expect(screen.queryByText(option)).not.toBeInTheDocument())
  })

  it('should show options when open', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />)
    
    options.forEach(option => expect(screen.queryByText(option)).not.toBeInTheDocument())

    const dropdownButton = screen.getByRole('button', { name: title })

    userEvent.click(dropdownButton)
  
    // diferenca de get para query => No get, caso ele n encontre, ele gera um error.
    options.forEach(option => expect(screen.getByRole('menuitem', { name: option })).toBeInTheDocument())
  })

  it('should signal an option was selected and close the dropdown', () => {
    const onSelect = jest.fn()
    render(<Dropdown title={title} options={options} onSelect={onSelect} />)

    const dropdownButton = screen.getByRole('button', { name: title })
    userEvent.click(dropdownButton)
  
    options.forEach(option => expect(screen.getByRole('menuitem', { name: option })).toBeInTheDocument())

    const option1 = screen.getByRole('menuitem', { name: options[1] })

    userEvent.click(option1)

    expect(onSelect).toHaveBeenCalledWith(options[1])

    options.forEach(option => expect(screen.queryByText(option)).not.toBeInTheDocument())
  })
})