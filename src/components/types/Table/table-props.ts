import { HTMLProps } from 'react'


type TableCellElement = 'td' | 'th'
export type TableContainerProps = HTMLProps<HTMLDivElement>
export type TableProps = HTMLProps<HTMLTableElement>
export type TableRowProps = HTMLProps<HTMLTableRowElement> & {
  forWhat?: 'HEADERS' | 'CONTENT'
}
export type TableHeadProps = HTMLProps<HTMLTableSectionElement>
export type TableBodyProps = HTMLProps<HTMLTableSectionElement>
export type TableCellProps = 
  HTMLProps<HTMLTableCellElement> & {
    element?: TableCellElement
  }
