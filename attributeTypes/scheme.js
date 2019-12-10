let SchemeInstance = null;
module.exports = class scheme {

    constructor() {
        if (!SchemeInstance) {
            SchemeInstance = this;
            //set all other default values

            this.displayAs = 'Scheme';
            this.value = '[scheme]'
            this.type = 'DROPDOWN';
            this.values = [
                { display: "None", value: "", default: true },
                { display: "Vivid", value: "'vivid'" },
                { display: "Natural ", value: "'natural'"},
                { display: "Cool", value: "'cool'" },
                { display: "Solar", value: "'solar'" },
                { display: "Air", value: "'air'"},
                { display: "Aqua", value: "'aqua'"},
                { display: "Flame", value: "'flame'"},
                { display: "Ocean", value: "'ocean'"},
                { display: "Forest", value: "'forest'"},
                { display: "Horizon", value: "'horizon'"},
                { display: "Neons", value: "'neons'"},
                { display: "Picnic", value: "'picnic'"},
                { display: "Night", value: "'night'"},
                { display: "Night Lights", value: "'nightLights'"}

            ];
        }

        return SchemeInstance;
    }
}