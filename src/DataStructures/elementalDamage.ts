import { types, danelement } from '../Constants/types';

export class ElementalDamage {
    inmune: string[] = [];
    debil: string[] = [];
    superDebil: string[] = [];
    resistente: string[] = [];
    superResistente: string[] = [];
    normal: string[] = [];

    constructor(tipo1: string, tipo2: string = "NaT") {
        this.calculate(tipo1,tipo2);
    }

    calculate(tipo1: string, tipo2: string = "NaT"){
        var valores = [];
        for (var i = 0; i < 18; i++) {
            valores.push(1);
        }
        var index = types.ing.indexOf(tipo1);
        if (index > -1) {
            for (var i = 0; i < 18; i++) {
                valores[i] = valores[i] * danelement[index][i];
            }
        }

        index = types.ing.indexOf(tipo2);
        if (index > -1) {
            for (var i = 0; i < 18; i++) {
                valores[i] = valores[i] * danelement[index][i];
            }
        }

        for (var i = 0; i < 18; i++) {
            switch (valores[i]) {
                case 0:
                    this.inmune.push(types.esp[i]);
                    break;
                case 0.25:
                    this.superResistente.push(types.esp[i]);
                    break;
                case 0.5:
                    this.resistente.push(types.esp[i]);
                    break;
                case 1:
                    this.normal.push(types.esp[i]);
                    break;
                case 2:
                    this.debil.push(types.esp[i]);
                    break;
                case 4:
                    this.superDebil.push(types.esp[i]);
                    break;
            }

        }
    }

    get asString() {
        var salida: string = "";
        salida = `
        Inmune: ${this.inmune.length > 0 ? this.inmune.toString() : "Nada"}\n
        Super resistente: ${this.superResistente.length > 0 ? this.superResistente.toString() : "Nada"}\n
        Resistente: ${this.resistente.length > 0 ? this.resistente.toString() : "Nada"}\n
        Daño normal: ${this.normal.length > 0 ? this.normal.toString() : "Nada"}\n
        Débil: ${this.debil.length > 0 ? this.debil.toString() : "Nada"}\n
        Súper débil: ${this.superDebil.length > 0 ? this.superDebil.toString() : "Nada"}\n
        `;
        return salida;
    }
}