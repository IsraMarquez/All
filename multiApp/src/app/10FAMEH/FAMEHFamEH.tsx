
export const FAMEHFamEH = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Matrimonio -
      <br />
      Niños (Principios del Evangelio)-
      <br />
      Mascotas
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
