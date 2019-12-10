// import attribute and advanced component
"use strict";
let AdvancedComponent = require("@jatahworx/bhive-toolkits").AdvancedComponent;
let Attribute = require("@jatahworx/bhive-toolkits").Attribute;

module.exports = class AdvancedMenu extends AdvancedComponent {
  constructor() {
    const name = "advanced-menu-neosme";
    const designerTemplate = `<advanced-menu-neosme onclick="click(event)" component-label="Menu" class="ad-element" style="max-width: 20%;border: 1px dashed #ccc !important;">
          <div class="inline-block" style="display: flex;position: absolute!important;padding: 2px;border-radius: 10px;right: 45%;z-index: 1;bottom: -13px;cursor: pointer;">
              <div class=\"min-fab-icon fab-icons-container\" style="width: 16px;height: 16px;"> <i id="add" class="material-icons component-placeholder" style="font-size: 16px;">add</i></div>
          </div>
       </advanced-menu-neosme>`;
    const paletteTemplate = "Menu";
    const componentLabel = 'Menu';
    const templateUrl = "https://material.angular.io/components/menu/overview";
    let randomTemp = []

    super(
      {
        name,
        template: ``,
        designerTemplate,
        paletteTemplate,
        componentLabel,
        templateUrl
      }
    );
    super.setType(AdvancedComponent.COMPONENT_TYPE_TITLES.LAYOUT.val);

    // Adding attributes here
    super.addAttribute(
      new Attribute({
        key: 'backdropClass',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'xPosition',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'yPosition',
        value: '',
        type: 'kv'
      })
    );
   super.addAttribute(
      new Attribute({
        key: 'matMenu',
        type: 'dav',
        templateUpdater: {
          preRender: () => {
            let randomId = "id" + Math.random().toString(36).substr(2, 5);
            let isPresent = randomTemp.find(o => o === randomId);
            if(isPresent){
              return isPresent;
            }else{
              randomTemp.push(randomId);
              return randomId;
            }
          }
        }
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'hasBackdrop',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'panelClass',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'overlapTrigger',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: '(closed)',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'direction',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'parentMenu',
        value: '',
        type: 'kv'
      })
    );
    super.addAttribute(
      new Attribute({
        key: 'MenuName',
        value: '',
        type: 'a'
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
      </div>
      `,
      onInit: function () { },
      onDestroy: function () { },
      customMethods: {
        click: function (e) {
          if (e.target.id === "add") {
            this.addChild("advanced-menu-item-neosme");
          }
        },
      }
    });
  }
  
  get template() {
    let template = '';
    template = `<mat-menu %style% %class% %xPosition% %yPosition% %backdropClass% %panelClass% #%matMenu%=matMenu %hasBackdrop% %overlapTrigger% %direction%>%MenuName%</mat-menu>`;
    return template;
  }
  set template(templateString) { }
};