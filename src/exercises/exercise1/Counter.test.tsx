import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'
import { describe, it, expect } from 'vitest'

describe('Counter', () => {
  it('should start with 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should increment when clicking the increment button', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('➕ Incrementar')
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should decrement when clicking the decrement button', () => {
    render(<Counter />)
    const decrementButton = screen.getByText('➖ Decrementar')
    fireEvent.click(decrementButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('should reset to 0 when clicking the reset button', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('➕ Incrementar')
    const resetButton = screen.getByText('🔁 Resetear')
    
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText('2')).toBeInTheDocument()
    
    fireEvent.click(resetButton)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
}) 