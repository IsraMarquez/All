//import { useNavigate } from 'react-router-dom';

export const RVDJFamExtEH = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Libro de Mormón
      <br />
      Nuevo Testamento (Iglesia)-
      <br />
      <br />
      Antiguo Testamento (Sacerdocio)-
      <br />
      <button
        onClick={() => router.push(-1)}
        type="button"
        style={{ backgroundColor: "black", color: "white" }}
        className="btn btn-secondary btn-sm"
      >
        Regresar
      </button>
    </div>
  );
};
