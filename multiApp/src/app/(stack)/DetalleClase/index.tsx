import { useUbicacion } from '@/context/UbicacionContext';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

interface clases {
  id: number;
  nombre: string;
  descripcion: string;
  colorStr: string;
}

const DetalleClase = () => {
  const { id } = useLocalSearchParams();
  const [clases, setClases] = useState<clases[]>([]);
  const [cargando, setCargando] = useState(true);
  const { ubicacion, cambiarUbicacion } = useUbicacion();

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
  console.log('Clases cargada:', clases);

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
        </View>
      )}
    />
  );
};

export default DetalleClase;
