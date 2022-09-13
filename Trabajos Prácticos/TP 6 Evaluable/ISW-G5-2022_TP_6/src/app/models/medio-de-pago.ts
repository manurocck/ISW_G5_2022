export class MedioPago{
    vencimiento = '';
    nombreApellido = '';
    numeroTarjeta = '';
    cvc = 0;

    monto = 0;
    
    tipo = 'Efectivo'; // 'Tarjeta':tarjeta 'Efectivo':efectivo

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
                console.log('No tendría que entrar acá');
                break
        }
        return;
    }
}


