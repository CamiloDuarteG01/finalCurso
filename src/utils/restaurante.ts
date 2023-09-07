
import { Paises } from "./recursos";
import { culturaGastronomica } from "./recursos";

export class Restaurante {
    constructor(
        public nombre: string,
        public pais: Paises,
        public ciudad: string,
        public numeroDeEstrellas: number = 0,
        public fechaDeOptencion: string = "",
        public tiposDeCulturas: (keyof typeof culturaGastronomica)[] = []
    ) {}
}

