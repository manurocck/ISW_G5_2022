export interface Ciudad {
    Nombre: string;
    Id: number;
}

export const Ciudades: Ciudad[] = [
    {Nombre: 'Córdoba', Id: 1},
    {Nombre: 'San Francisco', Id: 2},
    {Nombre: 'Villa General Belgrano', Id: 3},
]

export class Direccion {
    Calle='';
    Numero=0;
    Ciudad='';
    Referencia='';
}
