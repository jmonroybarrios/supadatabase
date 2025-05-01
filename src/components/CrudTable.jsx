import '../styles/animations.css';
import '../styles/colors.css';
import '../styles/crud.css';

function CrudTable() {
  return (
    <div className="crud-container">
      <button className="action-button create-button button-hover">
        Crear Nuevo
      </button>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fade-enter fade-enter-active">
            <td>1</td>
            <td>Ejemplo</td>
            <td>
              <button className="action-button edit-button button-hover">
                Editar
              </button>
              <button className="action-button delete-button button-hover">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;