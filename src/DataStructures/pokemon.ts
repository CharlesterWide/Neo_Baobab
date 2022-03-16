import { Ability } from './ability'
import { ElementalDamage } from './elementalDamage'
import { Stats } from './stats'

export class Pokemon {
    private altura : number;
    private debilidades : ElementalDamage;
    private estadisticas : Stats;
    private habilidades : Ability[] = [];
    private nombre : string;
    private peso : number;
    private tipos : string[] = [];
}