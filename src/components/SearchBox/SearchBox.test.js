import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import SearchBox from '.'

it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBox />)

  expect(queryByTestId('search-button')).toBeTruthy() // deve estar em tela
  expect(queryByPlaceholderText('Search')).toBeTruthy()
})

describe('Input value', () => {
  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<SearchBox />)
    const searchInput = queryByPlaceholderText('Search')

    fireEvent.change(searchInput, { target: { value: 'test' } })
  
    expect(searchInput.value).toBe('test')
  })
})

describe('Search button', () => {
  describe('with empty query', () => {
    it('does not trigger requestSearch function', () => {
      const requestSearch = jest.fn()

      const { queryByTestId } = render(<SearchBox requestSearch={requestSearch} />)
      fireEvent.click(queryByTestId('search-button'))
      // caso eu clique no botao de submit e nao exista valores no input, entao a funcao passada 'request search' nao deve ser chamada
      expect(requestSearch).not.toHaveBeenCalled()
    })
  })

  describe('with data inside query', () => {
    it('triggers requestSearch function', () => {
      const requestSearch = jest.fn()

      const { queryByTestId, queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)
      const searchInput = queryByPlaceholderText('Search')
      fireEvent.change(searchInput, { target: { value: 'test' } })
      fireEvent.click(queryByTestId('search-button'))
      expect(requestSearch).toHaveBeenCalledWith('test')
    })
  })
})