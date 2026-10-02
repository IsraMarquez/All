import { useUbicacion } from '@/context/UbicacionContext';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';

interface clases {
  id: number;
  nombre: string;
}

const ClasesScreen = () => {
  const { id } = useLocalSearchParams();
  const [clases, setClases] = useState<clases[]>([]);
  const [cargando, setCargando] = useState(true);
  const { ubicacion, cambiarUbicacion } = useUbicacion();

  //Llamada a la base de datos
  useEffect(() => {
    if (id) {
      fetch(`${ubicacion}/clases/${id}`)
        .then((res) => res.json())
        .then((data: clases[]) => {
          setClases(data);
        })
        .catch((err) => console.error(err))
        .finally(() => setCargando(false));
    }
  }, [id]);

  if (cargando) return <ActivityIndicator className="flex-1" size="large" />;
  console.log('Clases cargada:', clases);

  return (
    <FlatList
      className="flex flex-1 px-4"
      data={clases}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="mt-3">
          <Pressable
            key={item.id}
            className="bg-indigo-50 p-3 rounded-lg mb-2 flex-row justify-between items-center active:opacity-70"
            onPress={() =>
              router.push({
                pathname: '/DetalleClase', // Ruta de destino
                params: { id: item.id }, // ID individual del curso seleccionado
              })
            }
          >
            <Text className="text-gray-800 font-medium text-base">
              {item.nombre}
            </Text>
            <Text className="text-indigo-600 text-xs font-semibold">Ver →</Text>
          </Pressable>
        </View>
      )}
    />
  );
};

export default ClasesScreen;
