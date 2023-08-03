import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Pagination,
} from '@components'
import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('Table', () => {
  it('Should be render a table', () => {
    const { getByRole, getAllByRole } = render(
      <TableContainer>
        <Table role="table">
          <TableHead role="thead">
            <TableRow role="row">
              <TableCell role="title" element="th">
                title - test
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow role="row">
              <TableCell role="value" element="td">
                value - test
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>,
    )
    const table = getByRole('table')
    const thead = getByRole('thead')
    const rows = getAllByRole('row')
    const headerColumn = getByRole('title')
    const valueColumn = getByRole('value')

    expect(thead).toBeInTheDocument()
    expect(table).toBeInTheDocument()
    expect(headerColumn).toBeInTheDocument()
    expect(valueColumn).toBeInTheDocument()
    expect(rows).toHaveLength(2)
  })
  it('Should be render a table with pagination', () => {
    const { getByText } = render(
      <TableContainer>
        <Table role="table">
          <TableHead role="thead">
            <TableRow role="row">
              <TableCell role="title" element="th">
                title - test
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow role="row">
              <TableCell role="value" element="td">
                value - test
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Pagination
          currentPage={1}
          numberPages={5}
          onCurrentPage={() => console.log('currentPage')}
          onNextPage={() => console.log('nextPage')}
          onPreviousPage={() => console.log('previousPage')}
        />
      </TableContainer>,
    )

    const nextButton = getByText('Próximo')
    const previousButton = getByText('Anterior')
    const firstPageButton = getByText('1')
    expect(nextButton).toBeInTheDocument()
    expect(previousButton).toBeInTheDocument()
    expect(firstPageButton).toBeInTheDocument()
  })
  it('Should be interact with pagination', () => {
    const consoleSpy = jest.spyOn(console, 'log')

    const { getByText } = render(
      <TableContainer>
        <Table role="table">
          <TableHead role="thead">
            <TableRow role="row">
              <TableCell role="title" element="th">
                title - test
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow role="row">
              <TableCell role="value" element="td">
                value - test
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Pagination
          currentPage={1}
          numberPages={5}
          onCurrentPage={() => console.log('currentPage')}
          onNextPage={() => console.log('nextPage')}
          onPreviousPage={() => console.log('previousPage')}
        />
      </TableContainer>,
    )

    const nextButton = getByText('Próximo')
    const previousButton = getByText('Anterior')
    const firstPageButton = getByText('1')

    act(() => {
      fireEvent.click(nextButton)
      fireEvent.click(previousButton)
      fireEvent.click(firstPageButton)
    })

    expect(consoleSpy).toHaveBeenCalledTimes(2)
  })
})
