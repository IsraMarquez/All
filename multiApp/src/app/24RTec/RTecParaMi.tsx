
export const RTecParaMi = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Redes
      <br />
      Software - IA (Sin Fisicas, Sin Iluminación, Sin Colisiones, Sin Ciclos)
      <br />
      BD
      <br />
      Hardware
      <br />
      Tec
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
