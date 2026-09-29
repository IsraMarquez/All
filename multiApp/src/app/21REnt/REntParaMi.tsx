
export const REntParaMi = () => {
  // 1. Inicializas la función de navegación
  const router = useRouter();

  return (
    <div>
      {" "}
      Diseño Objetivos
      <br /> Narrativa
      <br /> Personajes
      <br /> UX
      <br />
      <br /> Redes
      <br /> Software(IA) (Fisicas, Iluminación, Colisiones, Ciclos)
      <br /> BD
      <br /> VR - AR
      <br />
      <br /> Tactil: Mecatronica
      <br />
      <br /> Visual: Video:Composición -
      <br /> Animación3D/2D -
      <br /> Iluminación:Texturizado/Coloreado -
      <br /> Modelado/Dibujo
      <br />
      <br /> Oido: Múscia - Sonidos
      <br />
      <br /> Grusto: -
      <br />
      <br /> Olfato: -
      <br />
      <br /> Feliz (Pos -
      <br />
      Comedia -
      <br />
      Magia)
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
