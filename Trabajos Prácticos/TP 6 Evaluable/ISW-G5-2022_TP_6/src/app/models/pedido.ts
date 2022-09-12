import { Direccion } from "./direccion";
import { FormaEntrega } from "./formaentrega";
import { MedioPago } from "./medio-de-pago";

export interface Pedido {
    InfoDireccion: Direccion;
    InfoEntrega: FormaEntrega;
    InfoPago: MedioPago;
    Id: number;
}