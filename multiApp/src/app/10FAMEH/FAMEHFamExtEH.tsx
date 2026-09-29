
export const FAMEHFamExtEH = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Family Search
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
