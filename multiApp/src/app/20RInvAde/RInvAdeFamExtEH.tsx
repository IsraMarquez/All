
export const RInvAdeFamExtEH = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      Investigación de Mercados
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
