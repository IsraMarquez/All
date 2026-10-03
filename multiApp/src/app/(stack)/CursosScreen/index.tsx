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

interface Curso {
  id: number;
  nombre: string;
  precio: number,
  avance: number,
  plataforma: string,
  colorStr: string,
}

interface subCategory {
  id: number;
  nombre: string;
  temaColorStr: string;
  cursos: Curso[];
}

const RVDJParaMi = () => {
  const { id } = useLocalSearchParams();
  const [subCategory, setSubCategory] = useState<subCategory[]>([]);
  const [cargando, setCargando] = useState(true);
  const { ubicacion, cambiarUbicacion } = useUbicacion();

  //Llamada a la base de datos
  useEffect(() => {
    if (id) {
      console.log('Ubicacion', ubicacion);
      fetch(`${ubicacion}/subcategory/${id}`)
        .then((res) => res.json())
        .then((data: subCategory[]) => {
          setSubCategory(data);
        })
        .catch((err) => console.error(err))
        .finally(() => setCargando(false));
    }
  }, [id]);

  if (cargando) return <ActivityIndicator className="flex-1" size="large" />;
  console.log('SubCategoría cargada:', subCategory);

  return (
    <FlatList
      className="flex flex-1 px-4"
      data={subCategory}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="mt-3">
          <Text style={{ backgroundColor: item.temaColorStr, padding: 5, borderRadius: 8}} className="font-bold text-white">{item.nombre}</Text>

          {/* Sublista de Cursos pertenecientes a este Tema */}
          {item.cursos.length > 0 ? (
            item.cursos.map((curso) => (
              <Pressable
                key={curso.id}
                style={{ backgroundColor: curso.colorStr}}
                className="bg-indigo-50 p-3 rounded-lg mb-2 flex-row justify-between items-center active:opacity-70"
                onPress={() =>
                  router.push({
                    pathname: '/ClasesScreen', // Ruta de destino
                    params: { id: curso.id }, // ID individual del curso seleccionado
                  })
                }
              >
                <Text className="text-gray-800 font-medium text-base">
                  {`Titulo: ${curso.nombre}\nPlataforma: ${curso.plataforma}\nPrecio: $${curso.precio}\nAvance: ${curso.avance}%`}
                </Text>
                <Text className="text-indigo-600 text-xs font-semibold">
                  Ver →
                </Text>
              </Pressable>
            ))
          ) : (
            <Text className="text-gray-400 italic text-sm">
              No hay cursos disponibles para este item.
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default RVDJParaMi;
