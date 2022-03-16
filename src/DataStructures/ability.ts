export class Ability {
    effect: string = "No data";
    name: string;
    nombre: string;
    url: string;

    constructor(abilityEntr: any) {
        this.name = abilityEntr.name;
        this.url = abilityEntr.url || "";

        if (abilityEntr.names) {
            var ok = false;
            var i = 0;
            while (!ok && i < abilityEntr.names.length) {
                if (abilityEntr.names[i].language.name == "es") {
                    this.nombre = abilityEntr.names[i].name;
                    ok = true;
                } else {
                    i++;
                }
            }
        }

        if (abilityEntr.flavor_text_entries) {
            var ok = false;
            var i = 0;
            while (!ok && i < abilityEntr.flavor_text_entries.length) {
                if (abilityEntr.flavor_text_entries[i].language.name == "es") {
                    this.effect = abilityEntr.flavor_text_entries[i].flavor_text;
                    ok = true;
                } else {
                    i++;
                }
            }
        }
    }
}