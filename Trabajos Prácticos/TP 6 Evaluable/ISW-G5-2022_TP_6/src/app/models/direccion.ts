export interface Ciudad {
    Nombre: string;
    Id: number;
}

export const Ciudades: Ciudad[] = [
    {Nombre: 'Cordoba', Id: 1},
    {Nombre: 'Jesus María', Id: 2},
    {Nombre: 'Alta Gracia', Id: 3},
    {Nombre: 'Ascochinga', Id: 4},
    {Nombre: 'Rio Ceballos', Id: 5},
]

export class Direccion {
    Calle='';
    Numero=0;
    Ciudad='';
    Referencia='';
}
