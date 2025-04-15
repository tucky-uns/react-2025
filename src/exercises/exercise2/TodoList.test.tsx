import { render, screen, fireEvent } from '@testing-library/react'
import { TodoList } from './TodoList'
import { describe, it, expect } from 'vitest'

describe('TodoList', () => {
  it('should show empty message when no todos', () => {
    render(<TodoList />)
    expect(screen.getByText('No hay tareas cargadas')).toBeInTheDocument()
  })

  it('should add a new todo', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('Nueva tarea...')
    const addButton = screen.getByText('Agregar')

    fireEvent.change(input, { target: { value: 'Nueva tarea' } })
    fireEvent.click(addButton)

    expect(screen.getByText('Nueva tarea')).toBeInTheDocument()
    expect(screen.getByText('Tareas pendientes: 1')).toBeInTheDocument()
  })

  it('should toggle todo completion', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('Nueva tarea...')
    const addButton = screen.getByText('Agregar')

    fireEvent.change(input, { target: { value: 'Nueva tarea' } })
    fireEvent.click(addButton)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(screen.getByText('Tareas pendientes: 0')).toBeInTheDocument()
  })

  it('should delete a todo', () => {
    render(<TodoList />)
    const input = screen.getByPlaceholderText('Nueva tarea...')
    const addButton = screen.getByText('Agregar')

    fireEvent.change(input, { target: { value: 'Nueva tarea' } })
    fireEvent.click(addButton)

    const deleteButton = screen.getByText('🗑️')
    fireEvent.click(deleteButton)

    expect(screen.getByText('No hay tareas cargadas')).toBeInTheDocument()
  })
}) 