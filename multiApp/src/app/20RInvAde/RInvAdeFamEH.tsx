
export const RInvAdeFamEH = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Motivar (Publicidad) Bueno -
      <br />
      <br />
      Plan
      <br />
      Innovación
      <br />
      Logistica -
      <br />
      <br />
      Demos
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
