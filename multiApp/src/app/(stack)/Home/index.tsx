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

const videoAsset = require('@/assets/videos/Misional.mp4');

const Home = () => {
  //Video
  const refVideo = useRef<VideoView>(null);
  const [esPantallaCompleta, setEsPantallaCompleta] = useState(false);
  // 1. Inicializamos el reproductor
  const player = useVideoPlayer(videoAsset, (p) => {
    p.loop = true; // Configuración inicial del player
  });

  // 2. Función para reproducir y solicitar pantalla completa
  const abrirPantallaCompleta = () => {
    setEsPantallaCompleta(true);
    player.play();

    // Retardo mínimo para asegurar que el reproductor inicie antes del Fullscreen
    setTimeout(() => {
      if (refVideo.current) {
        refVideo.current.enterFullscreen();
      }
    }, 100);
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
      <VideoView
        ref={refVideo}
        player={player}
        style={esPantallaCompleta ? styles.estiloVideo : styles.estiloOculto}
        allowsFullscreen
        allowsPictureInPicture
        // DETECTOR CLAVE: Se dispara cuando cambia el estado de pantalla completa
        onFullscreenChange={({ isFullscreen }) => {
          setEsPantallaCompleta(isFullscreen);

          // Opcional: Si deseas pausar el video al salir de la pantalla completa
          if (!isFullscreen) {
            player.pause();
          }
        }}
      />

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
            <Pressable className="flex-1 " onPress={abrirPantallaCompleta}>
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
            <Pressable className="flex-1 " onPress={abrirPantallaCompleta}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  // Tamaño visible normal cuando se va a reproducir
  estiloVideo: {
    width: 320,
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
  },
  // Oculto inicialmente en la pantalla
  estiloOculto: {
    width: 1,
    height: 1,
    opacity: 0,
  },
});
