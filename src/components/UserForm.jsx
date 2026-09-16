import { useState } from "react";
import { useNavigate, Link } from "react-router";

function UserForm({ onAddUser }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !correo.trim()) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    onAddUser({ nombre: nombre.trim(), correo: correo.trim() });
    navigate("/");
  };

  return (
    <div className="card-container form-card">
      <div className="card-header">
        <h2>Crear Nuevo Usuario</h2>
        <p className="subtitle">
          Ingresa la información para registrar un nuevo usuario.
        </p>
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
            Guardar Usuario
          </button>
          <Link to="/" className="btn btn-secondary">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
