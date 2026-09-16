import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserEdit from "./components/UserEdit";
import "./App.css";

function App() {
  // Estado para la lista de usuarios
  const [users, setUsers] = useState([
    { id: 1, nombre: "Alice", correo: "alice@example.com" },
    { id: 2, nombre: "Bob", correo: "bob@example.com" },
    { id: 3, nombre: "Charlie", correo: "charlie@example.com" },
  ]);

  // CREATE: Función para agregar un nuevo usuario
  const handleAddUser = (userData) => {
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      ...userData,
    };
    setUsers([...users, newUser]);
  };

  // UPDATE: Función para guardar los cambios de un usuario
  const handleUpdateUser = (id, updatedData) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user,
      ),
    );
  };

  // DELETE: Función para eliminar un usuario
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<UserList users={users} onDeleteUser={handleDeleteUser} />}
          />
          <Route
            path="/nuevo"
            element={<UserForm onAddUser={handleAddUser} />}
          />
          <Route
            path="/editar/:id"
            element={<UserEdit users={users} onUpdateUser={handleUpdateUser} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
