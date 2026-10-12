import { useUbicacion } from '@/context/UbicacionContext';
import { useLocalSearchParams } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
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

          <Text
            style={{ color: item.colorStr, fontSize: 20 }}
            className="text-justify"
          >
            {item.descripcion.replace(/@/g, '\n')}

            {/* {item.descripcion} */}
          </Text>
          <br />

          {/* ----------------------Visualizar contenido externo-----------------------------------------------------*/}
          {/* Sublista de Cursos pertenecientes a este Tema */}
          {item.assets.length > 0
            ? item.assets.map((asset) => (
                <View key={asset.id}>
                  {asset.ubicacion && asset.ubicacion.trim() !== ''
                    ? rederContent(asset.tipo, asset.ubicacion)
                    : null}
                  <br />
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
