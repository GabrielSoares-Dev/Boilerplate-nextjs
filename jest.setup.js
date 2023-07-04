import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'
import { server } from './tests/helpers'

jest.mock('next/navigation', () => require('next-router-mock'))

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
