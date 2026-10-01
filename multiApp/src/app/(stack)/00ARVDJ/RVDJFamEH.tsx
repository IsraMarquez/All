//import { useNavigate } from 'react-router-dom';

export const RVDJFamEH = () => {
  // 1. Inicializas la función de navegaciónconst router = useRouter();
  const router = useRouter();
  return (
    <div>
      Profetas Modernos
      <br />
      Doctrina y Convenios
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
