export class FormaEntrega {
    tipo = 'Lo antes posible';

    fecha = ''; //de acá a 5 días
    hora = ''; //entre las 8 y las 23

    mostrar(){
        switch(this.tipo){
            case 'Lo antes posible':
                console.log('Lo antes posible');
                break;
            case 'Fecha y hora':
                console.log('Fecha y hora');
                break;
        }
    }
}