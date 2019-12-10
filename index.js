let AdvancedMenu = require('./AdvancedMenu')
let AdvancedMenuItem = require('./AdvancedMenuItem')

//Importing attribute Types
let schemeConfig = require('./attributeTypes/scheme');

module.exports = {
    components: {
        AdvancedMenu,
        AdvancedMenuItem
    },
    
    // Specifying attribute types  of the component
    attributeTypes: {
        'scheme': new schemeConfig(),
    }
};