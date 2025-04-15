# Ejercicios Iniciales de React

Estos ejercicios están pensados para estudiantes que están comenzando con desarrollo web. Los objetivos principales son practicar los conceptos básicos de React, HTML, CSS, JavaScript y el modelo cliente-servidor a través de proyectos simples pero incrementales en complejidad.

---

## 💡 Ejercicio 1: Contador Interactivo

**Objetivo:**  
Familiarizarse con los componentes, estado (`useState`) y eventos en React.

**Enunciado:**  
Crear una aplicación en React que muestre un número en pantalla y tenga tres botones:
- ➕ "Incrementar"
- ➖ "Decrementar"
- 🔁 "Resetear"

Cada botón debe modificar el número mostrado de forma correspondiente. El número inicial es 0.

**Requisitos UI:**
- El número debe estar centrado en la pantalla y con un tamaño grande.
- Los botones deben tener estilos básicos y estar dispuestos horizontalmente.
- Aplicar efectos visuales al pasar el mouse o hacer clic (hover y active).

**Bonus:**
- Cambiar el color del número si es positivo (verde), negativo (rojo) o cero (negro).

---

## 💡 Ejercicio 2: Lista de Tareas Local

**Objetivo:**  
Practicar el manejo de arrays en el estado, componentes controlados y renderizado dinámico.

**Enunciado:**  
Crear una aplicación de lista de tareas donde el usuario pueda:
- Agregar una nueva tarea a través de un input.
- Ver la lista de tareas agregadas.
- Marcar tareas como completadas (checkbox).
- Eliminar tareas (botón 🗑️).

**Requisitos UI:**
- Mostrar las tareas en una lista ordenada o con viñetas.
- Estilizar las tareas completadas con un tachado o estilo distinto.
- El input y botón de agregar deben tener estilos básicos y buena disposición visual.

**Restricciones:**
- No usar backend ni almacenamiento local (todo debe estar en memoria).

**Bonus:**
- Mostrar un contador de tareas pendientes.
- Mensaje cuando no hay tareas cargadas.

---

## 💡 Ejercicio 3: Catálogo de Productos Ficticios (con Fetch)

**Objetivo:**  
Introducir el consumo de APIs con `fetch`, renderizado dinámico a partir de datos externos y práctica con componentes.

**Enunciado:**  
Crear una aplicación que consuma datos desde una API pública y muestre un catálogo de productos.

Recomendación: utilizar la API de [Fake Store API](https://fakestoreapi.com/products)

Cada producto debe mostrar:
- Imagen
- Título
- Precio

**Requisitos UI:**
- Disposición en grilla (mínimo 2 columnas).
- Cada producto debe mostrarse en una tarjeta con borde y padding.
- El diseño debe ser responsive: se debe ver bien en pantallas angostas.

**Bonus:**
- Filtro por categoría (pueden hardcodear algunas categorías).
- Indicador de carga mientras se obtienen los productos.
- Manejo de errores si la API falla.

---



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
