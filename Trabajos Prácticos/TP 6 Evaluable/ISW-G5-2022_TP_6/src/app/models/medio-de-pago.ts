export class MedioPago{
    vencimiento = '';
    nombreApellido = '';
    numeroTarjeta = '';
    cvc = 0;

    monto = 0;
    
    tipo = 'X'; // 'Tarjeta':tarjeta 'Efectivo':efectivo 'X':default

    mostrar(){
        switch(this.tipo){
            case 'Tarjeta':
                console.log(this.cvc);
                console.log(this.vencimiento);
                console.log(this.nombreApellido);
                console.log(this.numeroTarjeta);
                break;
            case 'Efectivo':
                console.log(this.monto);
                break;
            default:
                console.log('Todavía no ingresó ná');
                break
        }
        return;
    }
}


