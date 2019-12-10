// import attribute and advanced component from toolkits
let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
let AdvancedComponent = require("@jatahworx/bhive-toolkits").AdvancedComponent;

module.exports = class AdvancedMenuItem extends AdvancedComponent {
  constructor() {
    const name = 'advanced-menu-item-neosme';
    const designerTemplate = `<advanced-menu-item-neosme onclick="click(event)" slot="Menus" class=\"drop display-block\" component-label="Menu Item" block-copy style="min-width: 319px;padding-left: 0px !important;padding-right: 0px !important;margin: 0px !important;background: none !important;">
        <div class="inline-block" style="display: flex;position: absolute !important;padding: 2px;border-radius: 10px;right: 10%;z-index: 1;bottom: -16px;top: 5px;cursor: pointer;">  
          <div class=\"min-fab-icon fab-icons-container\" style="width: 16px !important;height: 16px !important;"> <i id="addsubmenuaction" class="material-icons component-placeholder" style="font-size: 16px;">add</i></div>
        </div>
      </advanced-menu-item-neosme>`;
    const paletteTemplate = 'Menu Item';
    const componentLabel = 'Menu Item';
    const templateUrl = 'https://material.angular.io/components/menu/overview';

    super({
      name,
      template: ``,
      designerTemplate,
      paletteTemplate,
      componentLabel,
      isAdvancedChild: true,
      templateUrl
    });
    super.setType(AdvancedComponent.COMPONENT_TYPE_TITLES.LAYOUT.val);

    // Adding required attributes
    super.addAttribute(
      new Attribute({
        key: '[disableRipple]',
        value: '',
        type: 'kv',
      })
    );

    super.addAttribute(
      new Attribute({
        key: '[disabled]',
        value: '',
        type: 'kv',
      })
    );

    super.addAttribute(
      new Attribute({
        key: 'role',
        value: '',
        type: 'kv',
      })
    );

    super.addAttribute(
      new Attribute({
        key: 'MenuName',
        value: '',
        type: 'a',
        useAsLabel: true
      })
    );

    super.addAttribute(
      new Attribute({
      key: 'color',
      value: '',
      type: 'kv'
    }));

    super.addAttribute(
      new Attribute({
        key: '[matMenuTriggerFor]',
        value: '',
        type: 'kv'
      })
    );

    super.composeTemplate({
      styles: `
            :host {
              display: flex;
              padding-top: 2em;
              padding-bottom: 1em;
              min-width: 20em;
              flex-direction: column;
              align-self: start;
            }
            .parent_card {
              display: flex;
              flex-direction: column;
            }
            `,
      slotsTemplate: `   
            <div class="parent_card">
              <slot name="Menus"></slot>
            </div>
            <div class="parent_card">
              <slot id="addSlot" name="add"></slot>
            <div>
            `,
      onInit: function () {},
      onDestroy: function () { },
      customMethods: {
        click: function (e) {
          if (e.target.id === "addsubmenuaction") {
            // Todo: When click to add, the sub menu item should add 
          } else if (e.target.id === "editaction") {
            // Todo: When click to edit, the menu item template need to change as input item label 
          }
        },
      }
    });
  }

  get template() {
    // UI for user
    const template = `<button mat-menu-item %style% %class% %color% %[disabled]% %[disableRipple]% %role% %[matMenuTriggerFor]%>%MenuName%</button>`;
    return template;
  }

  set template(templateString) { }

};