export const BasicTypes = () => {
    // Tipos de datos
    const name: string = 'Israel';
    const age: number = 41;
    const isActive: boolean =false;

    //De prerencia usar el tipo de dato del arreglo para que todos sean iguales
    const powers: string[] = ['React','ReactNative', 'Asto'];

  return (
    <>
        <h3>Tipos básicos</h3>
        {/* El boolean no se muestra en pantalla, se tiene que usar un if */}
        {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
        <p>{powers.join(', ')}</p>
    </>
   )
}
