
export class hechos {


    constructor() {

        //parametros para el analisis Fisico Quimico
        this.alcalinidadTotal = 120;
        this.durezaTotal = 500;
        this.durezaCalcica = 250;
        this.durezaMagnesica = 125;
        this.cloruros = 250;
        this.acidez = 250;
        this.turbiedad = 5;
        this.color = 15;
        this.solidosTotales = 1000;

        //parametros para el analisis Microbiologico
        this.toc = 50;
        this.bacterias = 1;
        this.endotoxinas = 0;
        this.nucleasas = 0;


    }

    get AlcalinidadTotal() { return this.alcalinidadTotal; }

    get durezaTotal() { return this.durezaTotal; }

    get durezaCalcica() { return this.durezaCalcica; }

    get durezaMagnesica() { return this.durezaMagnesica; }

    get cloruros() { return this.cloruros; }

    get acidez() { this.acidez; }

    get turbiedad() { return this.turbiedad; }

    get color() { return this.color; }

    get solidosTotales() { return this.solidosTotales; }

    set alcalinidadTotal(alcalinidadTotal) { this.alcalinidadTotal = alcalinidadTotal }

}



let h = new hechos();
console.log(h.alcalinidadTotal);