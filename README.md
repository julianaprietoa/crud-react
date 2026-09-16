# Gestión de Usuarios

Aplicación web de una sola página para practicar un CRUD de usuarios con React, Vite y React Router.

## Funcionalidades

- Listar usuarios con nombre, correo electrónico e identificador.
- Crear usuarios desde un formulario con validación de campos obligatorios y correo electrónico.
- Editar los datos de un usuario existente.
- Eliminar usuarios después de confirmar la acción.
- Mostrar estados vacíos y una vista específica cuando no se encuentra un usuario.
- Navegar entre las vistas de listado, creación y edición mediante rutas.

## Tecnologías

- React 19
- Vite
- React Router
- ESLint

## Puesta en marcha

Se necesita Node.js y npm instalados.

```bash
npm install
npm run dev
```

Después, abre la URL que muestra Vite en la terminal.

## Scripts disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la compilación de producción
npm run preview  # Sirve localmente la compilación de producción
npm run lint     # Ejecuta ESLint
```

## Rutas principales

- `/` — Lista de usuarios y acciones de edición o eliminación.
- `/nuevo` — Formulario para crear un usuario.
- `/editar/:id` — Formulario para editar un usuario existente.

## Nota sobre los datos

Los usuarios iniciales están definidos en `src/App.jsx` y se mantienen únicamente en el estado de React. No hay backend ni almacenamiento persistente: los cambios se pierden al recargar la página.
