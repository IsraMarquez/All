import { useUbicacion } from '@/context/UbicacionContext';
import { useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const videoUrl =
  'https://cuauhtemocqro-my.sharepoint.com/personal/ismarquez_ucq_edu_mx/_layouts/15/embed.aspx?UniqueId=6564616f-87a8-47a4-969a-b21ac2772b96&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create';

interface Asset {
  id: number;
  nombre: string;
  tipo: string;
  ubicacion: string;
}

interface clases {
  id: number;
  nombre: string;
  descripcion: string;
  colorStr: string;
  assets: Asset[];
}

const DetalleClase = () => {
  const { id } = useLocalSearchParams();
  const [clases, setClases] = useState<clases[]>([]);
  const [cargando, setCargando] = useState(true);
  const { ubicacion, cambiarUbicacion } = useUbicacion();
  const [tipo_contenido, setTipo_contenido] = useState('Excel');
  const refVideo = useRef<VideoView>(null);
  const [estaLeyendo, setEstaLeyendo] = useState(false);
  const [textoDb, setTextoDb] = useState(
    'Este es un texto largo que viene de tu base de datos. Al presionar el botón, la aplicación comenzará a leerlo en voz alta de manera nativa.',
  );
  //------------------------------------------------------------------------

  const hablar = async (textoNuevo: string) => {
    await Speech.stop();
    setTextoDb(textoNuevo);
    setEstaLeyendo(true);
    //console.log('textoNuevo> ', textoNuevo);
    //console.log('textoDb> ', textoDb);

    setTimeout(() => {
      Speech.speak(textoNuevo, {
        language: 'es-ES',
        pitch: 1.0,
        rate: 1.0,
        onDone: () => setEstaLeyendo(false),
        onError: (error) => {
          //console.error('Error al leer:', error);
          setEstaLeyendo(false);
        },
      });
    }, 100);
  }; // ⬅️ ¡AQUÍ FALTABA ESTA LLAVE PARA CERRAR LA FUNCIÓN HABLAR!

  const detener = () => {
    Speech.stop();
    setEstaLeyendo(false);
  };

  //------------------------------------------------------------------------
  const player = useVideoPlayer(videoUrl, (p) => {
    p.loop = true; // Configuración inicial del player
  });

  //Llamada a la base de datos
  useEffect(() => {
    if (id) {
      fetch(`${ubicacion}/detalleclase/${id}`)
        .then((res) => res.json())
        .then((data: clases[]) => {
          setClases(data);
        })
        .catch((err) => console.error(err))
        .finally(() => setCargando(false));
    }
  }, [id]);

  if (cargando) return <ActivityIndicator className="flex-1" size="large" />;
  if (clases.length === 0) {
    return (
      <View>
        <Text className="text-gray-400 italic text-sm">
          No hay contenido para esta clase.
        </Text>
      </View>
    );
  }
  //console.log('Clases cargada:', clases);
  //-----------------------------------------------------------------------------------------------------------

  const rederContent = (tipo_contenido: string, ubicacion: string) => {
    //console.log('TipoCont', tipo_contenido);
    switch (tipo_contenido) {
      case 'GSheets':
        return (
          <View>
            <iframe src={ubicacion} width="100%" height="400px"></iframe>
          </View>
        );

      case 'Imagen':
        return (
          <View>
            <Image
              source={{
                uri: ubicacion,
              }}
              style={{ width: '100%', height: 300 }}
              resizeMode="contain"
            />
          </View>
        );

      case 'Pdf':
        return (
          <View>
            {/* En Expo Web, las etiquetas HTML estándar funcionan mediante interoperabilidad */}
            <iframe
              src={ubicacion}
              style={{ width: '100%', height: 600 }}
              title="Visor de PDF"
            />
          </View>
        );

      case 'Video':
        //  SI ESTAMOS EN LA WEB: Usamos un iframe de HTML tradicional
        if (Platform.OS === 'web') {
          return (
            <View>
              <iframe
                src={ubicacion}
                width="100%"
                height="100%"
                style={{ border: 'none', maxWidth: '640px', height: '360px' }}
                allowFullScreen
                title="Video SharePoint Web"
              />
            </View>
          );
        }

      case 'Sonido':
        //  SI ESTAMOS EN LA WEB: Usamos un iframe de HTML tradicional
        if (Platform.OS === 'web') {
          return (
            <View>
              <iframe
                src={ubicacion}
                width="100%"
                height="100%"
                style={{ border: 'none', maxWidth: '640px', height: '360px' }}
                allow="autoplay"
              />
            </View>
          );
        }
      default:
        <View></View>;
    }
  };
  //-----------------------------------------------------------------------------------------------------------

  return (
    <FlatList
      className="flex flex-1 px-4"
      data={clases}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="mt-3">
          <Text
            style={{
              color: item.colorStr,
              fontSize: 26,
              padding: 5,
              borderRadius: 8,
            }}
            className="font-bold text-white"
          >
            {item.nombre}
          </Text>

          {/* ----------------------Speach-----------------------------------------------------*/}
          <View style={styles.botones}>
            {item.descripcion ? (
              !estaLeyendo ? (
                <Button
                  title="Leer en voz alta"
                  color="green"
                  onPress={() => hablar(item.descripcion.replace(/@/g, '\n'))}
                />
              ) : (
                <Button title="Detener lectura" color="red" onPress={detener} />
              )
            ) : null}
          </View>
          {/* ----------------------Speach-----------------------------------------------------*/}

          <Text
            style={{ color: item.colorStr, fontSize: 20 }}
            className="text-justify"
          >
            {item.descripcion ? item.descripcion.replace(/@/g, '\n') : null}
            {/* {item.descripcion} */}
          </Text>
          <Text>{'\n'}</Text>

          {/* ----------------------Visualizar contenido externo-----------------------------------------------------*/}
          {/* Sublista de Cursos pertenecientes a este Tema */}
          {item.assets.length > 0
            ? item.assets.map((asset) => (
                <View key={asset.id}>
                  {asset.ubicacion && asset.ubicacion.trim() !== ''
                    ? rederContent(asset.tipo, asset.ubicacion)
                    : null}
                  <Text>{'\n'}</Text>
                </View>
              ))
            : null}
          {/* ----------------------Visualizar contenido externo-----------------------------------------------------*/}
        </View>
      )}
    />
  );
};

export default DetalleClase;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  texto: { fontSize: 16, marginBottom: 20 },
  botones: {
    marginTop: 10,
    alignSelf: 'flex-start', // 🌟 Evita que el botón ocupe todo el ancho
    borderRadius: 20, // 🌟 Hace las esquinas redondeadas
    overflow: 'hidden',
  },
});
