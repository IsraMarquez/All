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
  const manejarPresion = (id: number, newPath: string) => {
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
        style={esPantallaCompleta ? styles.estiloVideo : styles.estiloOculto}
        allowsPictureInPicture
        />
      <Pressable style={styles.botonCerrarFlotante} onPress={cerrarVideo}>
        <Text style={styles.textoCerrar}>✕</Text>
      </Pressable>
        </View>
      )}

      {/* Encabezado */}
      <View className="border border-white rounded-lg overflow-hidden m-1">
        <Text className="font-bold text-black text-left">
          Horizontal - Mayor Tiempo Posible (Niños) 60%
        </Text>
        <View className="flex-row bg-white p-4">
          <Text className="flex-1 font-bold text-black text-left">
            Para Mi-Palabras de Vida 60%
          </Text>
          <Text className="flex-1 font-bold text-black text-left">FamEH</Text>
          <Text className="flex-1 font-bold text-black text-left">
            FamExtEH
          </Text>
          <Text className="flex-1 font-bold text-black text-left">
            Ellos-Medido N40%
          </Text>
        </View>
      </View>
      <ScrollView>
        {/* ARVDJ */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-indigo-600 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.Misional)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Abuelo.png')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-indigo-600 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-indigo-600 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-indigo-600 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>

        {/* FAMEH */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-violet-500 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.FamEh)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Matrimonio.jpeg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-violet-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-violet-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-violet-500 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>

        {/* RInvAde */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-violet-500 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.RInvAde)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/RInvAde.jpg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-violet-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-violet-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-violet-500 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>
        
        {/* REntre */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-red-500 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.REntre)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Feliz.jpeg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-red-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-red-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-red-500 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>
        
        {/* RMund */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-red-500 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.RMun)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Viajar.jpeg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-red-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-red-500 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-red-500 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>
        
        {/* RInv */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.RInv)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Educacion.jpg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>
        
        {/* RTec */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.RTec)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Tec.jpg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-yellow-700 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>
        
        {/* RSal */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-green-700 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.RSal)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Comida.jpeg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-green-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-green-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-green-700 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
        </View>
        
        {/* FAMEH */}
        <View className="border border-gray-300 rounded-lg overflow-hidden m-1">
          {/* Fila 1 */}
          <View className="flex-row bg-green-700 p-4">
            <Pressable className="flex-1 " onPress={() => reproducirVideoSeleccionado(VIDEOS.RDep)}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                source={require('@/assets/sprites/Army.jpg')}
              />
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Motivar Cristo
            </Text>
            <Text className="flex-1 font-bold text-white text-left">QQ</Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Espiritu
            </Text>
          </View>
          {/* Fila 2 */}
          <View className="flex-row bg-green-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Div-PreEntContex
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                EntEscrituras
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(3, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                My Info
              </Text>
            </Pressable>
            <Pressable
              className="flex-1"
              onPress={() => manejarPresion(4, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-amber-400 text-left">
                Ellos-Info
              </Text>
            </Pressable>
          </View>
          {/* Fila 3 */}
          <View className="flex-row bg-green-700 p-4">
            <Pressable
              className="flex-1 "
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-lime-400 text-left">
                Sim-ProPruebaRapAde
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 font-bold text-white text-left"
              onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}
            >
              <Text className="font-bold text-white text-left">Ayudar</Text>
            </Pressable>
            <Text className="flex-1 font-bold text-white text-left">
              Practicar
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              Ellos-Lugares
            </Text>
          </View>
          {/* Fila 4 */}
          <View className="flex-row bg-green-700 p-4">
            <Text className="flex-1 font-bold text-white text-left">
              Sim-PostRutAutoHabitos
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              AyudarRutAuto
            </Text>
            <Text className="flex-1 font-bold text-white text-left">
              RutAuto
            </Text>

            <Text className="flex-1 font-bold text-white text-left">
              Ellos-RutAuto
            </Text>
          </View>
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
