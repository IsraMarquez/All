
export const RDepParaMi = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Deportes Equipo
      <br />
      Tec Ind (Tiros3 60% - Fintas: Pases/Bote - Coladas (Clavadas)N40%)
      <br />
      Army Lejos
      <br />
      Def Per (Hab) (Patada 60% - Puño/Codo/Rodilla - Jiujitsu N40%)
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
