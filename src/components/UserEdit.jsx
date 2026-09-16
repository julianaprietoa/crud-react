import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";

function UserEdit({ users, onUpdateUser }) {
  const { id } = useParams();
  const userToEdit = users.find((user) => user.id === Number(id));

  if (!userToEdit) {
    return (
      <div className="card-container form-card text-center">
        <div className="empty-icon">⚠️</div>
        <h2>Usuario no encontrado</h2>
        <p className="subtitle">
          El usuario con ID #{id} no existe o fue eliminado.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: "20px" }}>
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <UserEditForm
      key={userToEdit.id}
      user={userToEdit}
      onUpdateUser={onUpdateUser}
    />
  );
}

function UserEditForm({ user, onUpdateUser }) {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(user.nombre);
  const [correo, setCorreo] = useState(user.correo);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !correo.trim()) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    onUpdateUser(user.id, { nombre: nombre.trim(), correo: correo.trim() });
    navigate("/");
  };

  return (
    <div className="card-container form-card">
      <div className="card-header">
        <h2>Editar Usuario</h2>
      </div>

      {error && <div className="alert-error">{error}</div>}

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Juan Pérez"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              if (error) setError("");
            }}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            placeholder="Ej. juan@example.com"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              if (error) setError("");
            }}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Actualizar Usuario
          </button>
          <Link to="/" className="btn btn-secondary">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
