import { Link } from "react-router";

function UserList({ users, onDeleteUser }) {
  const handleDelete = (id, nombre) => {
    const confirmation = window.confirm(
      `¿Estás seguro de que deseas eliminar a ${nombre}?`,
    );
    if (confirmation) {
      onDeleteUser(id);
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="card-container">
      <div className="list-header">
        <div>
          <h2>Lista de Usuarios</h2>
          <p className="subtitle">
            {users.length === 1
              ? "1 usuario registrado"
              : `${users.length} usuarios registrados`}
          </p>
        </div>
        <Link to="/nuevo" className="btn btn-primary">
          + Agregar Usuario
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📂</div>
          <h3>No hay usuarios registrados</h3>
          <p>Comienza creando el primer usuario en la plataforma.</p>
          <Link to="/nuevo" className="btn btn-primary">
            Crear Usuario
          </Link>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="user-table">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Correo Electrónico</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        {getInitials(user.nombre)}
                      </div>
                      <div>
                        <span className="user-name">{user.nombre}</span>
                        <span className="user-id">ID: #{user.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="user-email">{user.correo}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <Link
                        to={`/editar/${user.id}`}
                        className="btn btn-warning btn-sm"
                        title="Editar usuario"
                      >
                        ✏️ Editar
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(user.id, user.nombre)}
                        className="btn btn-danger btn-sm"
                        title="Eliminar usuario"
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserList;
