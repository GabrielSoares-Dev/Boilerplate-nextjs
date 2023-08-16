import { InputFile, ErrorMessage } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('InputFile', () => {
  it('Should be render a input file', () => {
    const { getByText } = render(<InputFile specifications="PNG" />)

    const inputFile = getByText('Clique para fazer upload')

    expect(inputFile).toBeInTheDocument()
  })
  it('Should be upload file', async () => {
    const { getByText } = render(
      <InputFile specifications="PNG" currentFile="test-file.txt" />,
    )

    const inputFile = getByText('test-file.txt')

    expect(inputFile).toBeInTheDocument()
  })

  it('Should be show a error message', async () => {
    const { getByText } = render(
      <InputFile
        specifications="PNG"
        errorMessage={() => <ErrorMessage>error message test</ErrorMessage>}
      />,
    )

    const errorMessage = getByText('error message test')
    expect(errorMessage).toBeInTheDocument()
  })
})
