import { useUbicacion } from '@/context/UbicacionContext';
import { useEventListener } from 'expo';
import { useRouter } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Definimos la lista de videos con sus archivos
const VIDEOS = {
  Misional: require('@/assets/videos/Misional.mp4'),
  FamEh: require('@/assets/videos/FamEh.mp4'),
  RInvAde: require('@/assets/videos/RInvAde.mp4'),
  REntre: require('@/assets/videos/REntre.mp4'),
  RMun: require('@/assets/videos/RMun.mp4'),
  RInv: require('@/assets/videos/RInv.mp4'),
  RTec: require('@/assets/videos/RTec.mp4'),
  RSal: require('@/assets/videos/RSal.mp4'),
  RDep: require('@/assets/videos/RDep.mp4'),
};
//const videoAsset = require('@/assets/videos/Misional.mp4');

const Home = () => {
  //Cambio de red
  // Estado para controlar la modalidad (true = Oficina, false = Casa)
  const [esOficina, setEsOficina] = useState(false);
  const { ubicacion, cambiarUbicacion } = useUbicacion();
  const checarUbicacion = (modoOficina: boolean) => {
    setEsOficina(modoOficina);
    // Aquí puedes hacer un fetch() o guardar el estado en tu Base de Datos
    console.log('Modo cambiado a:', modoOficina ? 'Oficina' : 'Casa');

    if (modoOficina) {
      cambiarUbicacion('http://10.1.5.48:3000');
    } else {
      cambiarUbicacion('http://192.168.100.90:3000');
    }
  };

  //Video
  const refVideo = useRef<VideoView>(null);
  const [esPantallaCompleta, setEsPantallaCompleta] = useState(false);
  const [videoActual, setVideoActual] = useState(VIDEOS.Misional);
  const [debeReproducir, setDebeReproducir] = useState(false);

  // 1. Inicializamos el reproductor
  const player = useVideoPlayer(videoActual, (p) => {
    p.loop = true; // Configuración inicial del player
  });

  // 2. Función para reproducir y solicitar pantalla completa
  const reproducirVideoSeleccionado = (videoFuente: any) => {
    // 1. Reemplazamos el video en el reproductor
    setDebeReproducir(true);
    setVideoActual(videoFuente);
    player.replace(videoFuente);
    setEsPantallaCompleta(true);
    player.play();

    // Retardo mínimo para asegurar que el reproductor inicie antes del Fullscreen
    setTimeout(() => {
      if (refVideo.current) {
        player.play();
      }
    }, 200);
  };
  // Escuchamos cuando el video cambia de estado
  useEventListener(player, 'statusChange', ({ status }) => {
    // Cuando el video termina de cargarse y está listo, le damos play si el usuario presionó el botón
    if (status === 'readyToPlay' && debeReproducir) {
      player.play();
      setDebeReproducir(false); // Reiniciamos el flag
    }
  });

  // 3. Función cerra video
  const cerrarVideo = () => {
    player.pause();
    setEsPantallaCompleta(false);
  };

  //Navegacion
  const router = useRouter();
  const manejarPresion = (id: number, newPath: any) => {
    // Navega a la pantalla 'detalle' y envía el ID en la URL
    router.push({
      pathname: newPath,
      params: { id: id },
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Video */}
      {esPantallaCompleta && (
        <View style={styles.contenedorFullscreen}>
          <VideoView
            ref={refVideo}
            player={player}
            style={
              esPantallaCompleta ? styles.estiloVideo : styles.estiloOculto
            }
            allowsPictureInPicture
          />
          <Pressable style={styles.botonCerrarFlotante} onPress={cerrarVideo}>
            <Text style={styles.textoCerrar}>✕</Text>
          </Pressable>
        </View>
      )}

      {/* Encabezado */}
      <View className="border border-white rounded-lg overflow-hidden m-1">
        <Text className="font-bold text-white text-left">
          Horizontal - Mayor Tiempo Posible (Niños) 60%
        </Text>
        <View className="flex-row bg-black p-0.5">
          <Text className="flex-[4] font-bold text-white text-left">
            Para Mi-Palabras de Vida 60%
          </Text>
          <Text className="flex-[2] font-bold text-white text-left">FamEH</Text>
          <Text className="flex-[2] font-bold text-white text-left">
            FamExtEH
          </Text>
          <Text className="flex-[1] font-bold text-white text-left">
            Ellos-Medido N40%
          </Text>
        </View>
      </View>
      <ScrollView>

        {/* ARVDJ */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-white ">
            <Pressable
              className="flex-[4] bg-indigo-600 "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.Misional)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Abuelo.png')}
              />
            </Pressable>
            <Text className="flex-[2] bg-indigo-800 font-bold text-red-800 text-left'">
              Motivar Cristo (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-indigo-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1]  bg-indigo-950 font-bold text-red-950 text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-indigo-600  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(1, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-600 text-left">
                Div-PreEntContex-> Plan
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-indigo-800 font-bold text-amber-800 text-left">
              EntEscrituras
            </Text>
            <Text className="flex-[2] bg-indigo-800 font-bold text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-indigo-950 font-bold text-amber-950 text-left">
              Ellos-Info
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-indigo-600 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(1, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-indigo-800 font-bold text-gray-800 text-left">
              Ayudar
            </Text>
            <Text className="flex-[2] bg-indigo-800 font-bold text-gray-800 text-left">
              Practicar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-indigo-950 font-bold text-gray-950 text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-indigo-600 ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-[2] bg-indigo-800 font-bold text-gray-800 text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-[2] bg-indigo-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-indigo-950 font-bold text-gray-950 text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>

        {/* FAMEH */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-violet-500 ">
            <Pressable
              className="flex-[4] bg-violet-500 "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.FamEh)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Matrimonio.jpeg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-violet-800 font-bold text-red-800 text-left">
              Motivar Cristo (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-violet-950 font-bold text-red-950 text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-violet-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(2, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-600 text-left">
                Div-PreEntContex-> Plan
              </Text>
            </Pressable>
            <Text className="flex-[2] font-bold bg-violet-800 text-amber-800 text-left">
              EntEscrituras (HomeSch/2Tit)
            </Text>
            <Text className="flex-[2] font-bold bg-violet-800 text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] font-bold bg-violet-950 text-amber-950 text-left">
              Ellos-Info
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-violet-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(2, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              Noches Hogar (Actividades) MyTiempo Posible (Niños)
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              Practicar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-violet-950 font-bold text-gray-950 text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-violet-500 ">
            <Text className="flex-[4] bg-violet-500 font-bold text-green-950 text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-violet-950 font-bold text-gray-950 text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>

        {/* RInvAde */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-violet-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.RInvAde)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/RInvAde.jpg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-violet-800 font-bold text-red-800 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-violet-950 font-bold text-red-950 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-violet-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(3, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Master)
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-violet-800 font-bold text-amber-800 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-violet-950 font-bold text-amber-950 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-violet-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(3, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-violet-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-violet-500 ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-violet-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>
            <Text className="flex-[1] bg-violet-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        {/* REnstre */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-red-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.REntre)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Feliz.jpeg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-red-800 font-bold text-red-950 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-red-950 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-red-950 font-bold text-red-800 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-red-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(4, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Espe)
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-red-800 font-bold text-amber-800 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-red-950 font-bold text-amber-950 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-red-500 ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(4, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-red-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-red-500">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-red-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        {/* RMund */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-red-500  ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.RMun)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Viajar.jpeg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-red-800 font-bold text-red-950 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-red-950 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-red-950 font-bold text-red-800 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-red-500  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(5, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Espe)
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-red-800 font-bold text-amber-800 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-red-950 font-bold text-amber-950 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-red-500  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(5, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-red-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-red-500  ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-red-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-red-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        {/* Edu */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-yellow-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.RInv)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Educacion.jpg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-yellow-800 font-bold text-red-800 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-red-950 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-yellow-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(6, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Ing/Lic)
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-yellow-800 font-bold text-amber-950 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-amber-950 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-amber-800 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-yellow-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(6, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-yellow-700  ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-yellow-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        {/* RTec */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-yellow-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.RTec)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Tec.jpg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-yellow-800 font-bold text-red-800 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-red-950 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-yellow-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(7, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Ing/Lic)
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-yellow-800 font-bold text-amber-950 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-amber-950 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-amber-800 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-yellow-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(7, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-yellow-700  ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-yellow-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>
            <Text className="flex-[1] bg-yellow-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        {/* RSal */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-green-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.RSal)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Comida.jpeg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-green-800 font-bold text-red-800 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-green-950 font-bold text-red-950 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-green-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(8, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Cur)
              </Text>
            </Pressable>
            <Text className="flex-[2] font-bold bg-green-800 text-amber-800 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] font-bold bg-green-800 text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] font-bold bg-green-950 text-amber-950 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-green-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(8, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-green-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-green-700  ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-green-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        {/* RDep */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-green-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => reproducirVideoSeleccionado(VIDEOS.RDep)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Army.jpg')}
              />
            </Pressable>
            <Text className="flex-[2] bg-green-800 font-bold text-red-800 text-left">
              Motivar Bueno (Tranquilo)
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-red-800 text-left">
              QQ
            </Text>
            <Text className="flex-[1] bg-green-950 font-bold text-red-950 text-left">
              Ellos-3Productos
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-green-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(9, '/CursosScreen')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContexVertical-IA-> Plan (Cur)
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-green-800 font-bold text-amber-800 text-left">
              PlanInnovLog
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-amber-800 text-left">
              My Info
            </Text>
            <Text className="flex-[1] bg-green-950 font-bold text-amber-950 text-left">
              Ellos-Servicios
            </Text>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-green-700  ">
            <Pressable
              className="flex-[4] "
              onPress={() => manejarPresion(9, '/CursosScreen')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPedazosPRapAde
              </Text>
            </Pressable>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              Demo
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              Probar (Indicadores-Her)
            </Text>
            <Text className="flex-[1] bg-green-950 font-bold text-gray-950 text-left">
              Ellos-Reparaciones
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-green-700  ">
            <Text className="flex-[4] font-bold text-green-950 text-left">
              Sim-PostRutAutoRobots
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              Suministro
            </Text>
            <Text className="flex-[2] bg-green-800 font-bold text-gray-800 text-left">
              RutAuto
            </Text>

            <Text className="flex-[1] bg-green-950 font-bold text-gray-950 text-left">
              Ellos-Empleo
            </Text>
          </View>
        </View>

        <Text className="font-bold text-white text-left">
          Vertical - Espiral - Varias veces al día
        </Text>

        {/* Cambio de red */}
        <View className="flex-[2] justify-center items-center p-4 bg-black-100">
          {/* Contenedor tipo Toggle segmentado */}
          <View className="flex-row bg-black p-1 rounded-xl w-64">
            {/* Opción Oficina */}
            <Pressable
              onPress={() => checarUbicacion(true)}
              className={`flex-[2] py-3 rounded-lg items-center ${
                esOficina ? 'bg-indigo-600 shadow' : 'bg-transparent'
              }`}
            >
              <Text
                className={`font-bold ${esOficina ? 'text-white' : 'text-gray-700'}`}
              >
                🏢 Oficina
              </Text>
            </Pressable>

            {/* Opción Casa */}
            <Pressable
              onPress={() => checarUbicacion(false)}
              className={`flex-[2] py-3 rounded-lg items-center ${
                !esOficina ? 'bg-emerald-600 shadow' : 'bg-transparent'
              }`}
            >
              <Text
                className={`font-bold ${!esOficina ? 'text-white' : 'text-gray-700'}`}
              >
                🏠 Casa
              </Text>
            </Pressable>
          </View>

          <Text className="mt-4 text-gray-600 font-medium">
            Ubicación activa: {esOficina ? 'Oficina' : 'Casa'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  // Ocupa el 100% de la pantalla del navegador
  contenedorFullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Tamaño visible normal cuando se va a reproducir
  estiloVideo: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginBottom: 20,
  },
  // Oculto inicialmente en la pantalla
  estiloOculto: {
    width: 1,
    height: 1,
    opacity: 0,
  },
  botonCerrarFlotante: {
    position: 'absolute',
    top: 30,
    right: 30,
    backgroundColor: 'rgba(0, 0, 0, 255)',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    zIndex: 10000,
  },
  textoCerrar: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
