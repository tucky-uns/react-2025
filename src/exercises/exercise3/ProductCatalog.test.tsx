import { render, screen, waitFor } from '@testing-library/react'
import { ProductCatalog } from './ProductCatalog'
import { vi } from 'vitest'

describe('ProductCatalog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should show loading state initially', () => {
    render(<ProductCatalog />)
    expect(screen.getByText('Cargando productos...')).toBeInTheDocument()
  })

  it('should display products after loading', async () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Test Product',
        price: 10.99,
        image: 'test.jpg',
        category: 'test'
      }
    ]

    vi.mocked(fetch).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProducts)
      } as Response)
    )

    render(<ProductCatalog />)
    
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument()
      expect(screen.getByText('$10.99')).toBeInTheDocument()
    })
  })

  it('should show error message when fetch fails', async () => {
    vi.mocked(fetch).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Not Found'
      } as Response)
    )

    render(<ProductCatalog />)
    
    await waitFor(() => {
      expect(screen.getByText(/Error al cargar los productos/)).toBeInTheDocument()
    })
  })
}) 