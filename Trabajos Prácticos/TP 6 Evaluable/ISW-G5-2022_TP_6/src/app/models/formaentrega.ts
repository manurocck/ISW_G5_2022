export interface FormaEntrega {
    Nombre: string;
    Id: number;
}

export const TiposEntregas: FormaEntrega[] = [
    {Nombre: 'Lo antes posible', Id: 1},
    {Nombre: 'Seleccionar fecha y hora', Id: 2},
] 