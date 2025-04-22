import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { Counter } from './exercises/exercise1/Counter'
import { TodoList } from './exercises/exercise2/TodoList'
import { ProductCatalog } from './exercises/exercise3/ProductCatalog'
import styles from './App.module.css'

const exercises = [
  { id: 1, name: 'Contador', component: Counter },
  { id: 2, name: 'Lista de Tareas', component: TodoList },
  { id: 3, name: 'Catálogo de Productos', component: ProductCatalog }
]

function ExerciseComponent() {
  const { exerciseId } = useParams()
  const navigate = useNavigate()
  const exercise = exercises.find(ex => ex.id === Number(exerciseId))
  
  if (!exercise) {
    navigate('/1')
    return null
  }

  const Component = exercise.component
  return <Component />
}

export function App() {
  const location = useLocation()
  const currentExerciseId = location.pathname.split('/').pop()

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {exercises.map(exercise => (
          <Link
            key={exercise.id}
            to={`${exercise.id}`}
            className={`${styles.navButton} ${currentExerciseId === exercise.id.toString() ? styles.active : ''}`}
          >
            {exercise.name}
          </Link>
        ))}
      </nav>
      
      <main className={styles.main}>
        <Routes>
          <Route path="/:exerciseId" element={<ExerciseComponent />} />
          <Route path="/" element={<ExerciseComponent />} />
        </Routes>
      </main>
    </div>
  )
}
