interface Person //Mascara que obliga a usar esos tipos de datos
{
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address
{
    country: string;
    houseNo: string;
    street?: string; //opcional
}

export const ObjectLiterals = () => {
    const person: Person = { ///Mascara que obliga a usar esos campos a menos que sea opcional ?
        age: 38,
        firstName: 'Israel',
        lastName: 'Marquez',
        address: {
            country: 'Canada',
            houseNo: '65',
        },
    };

  return (
    <>
        <div>ObjectLiterals</div>
        <pre>{JSON.stringify(person,null,2)}</pre> {/*Un objeto se muestra con el JSON.stringify */}
    </>
  )
}
