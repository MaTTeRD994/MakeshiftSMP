// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in //kubejs/assets/kubejs/models/item/test_item.json
    event.create('incomplete_spore_blossom')
       .displayName('Incomplete Spore Blossom')
      .texture('minecraft:spore_blossom');
})