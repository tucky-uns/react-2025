import { useState } from 'react'
import { Counter } from './exercises/exercise1/Counter'
import { TodoList } from './exercises/exercise2/TodoList'
import { ProductCatalog } from './exercises/exercise3/ProductCatalog'
import styles from './App.module.css'

const exercises = [
  { id: 1, name: 'Contador', component: Counter },
  { id: 2, name: 'Lista de Tareas', component: TodoList },
  { id: 3, name: 'Catálogo de Productos', component: ProductCatalog }
]

export function App() {
  const [currentExercise, setCurrentExercise] = useState(1)

  const CurrentComponent = exercises.find(ex => ex.id === currentExercise)?.component

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {exercises.map(exercise => (
          <button
            key={exercise.id}
            onClick={() => setCurrentExercise(exercise.id)}
            className={`${styles.navButton} ${currentExercise === exercise.id ? styles.active : ''}`}
          >
            {exercise.name}
          </button>
        ))}
      </nav>
      
      <main className={styles.main}>
        {CurrentComponent && <CurrentComponent />}
      </main>
    </div>
  )
}
