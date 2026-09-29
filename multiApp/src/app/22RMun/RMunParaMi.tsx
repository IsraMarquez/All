
export const RMunParaMi = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Mundo
      <br />
      Idiomas
      <br />
      Costumbres
      <br />
      Arte
      <br />
      <button
        onClick={() => router.push(1)}
        type="button"
        style={{ backgroundColor: "black", color: "white" }}
        className="btn btn-secondary btn-sm"
      >
        Regresar
      </button>
    </div>
  );
};
