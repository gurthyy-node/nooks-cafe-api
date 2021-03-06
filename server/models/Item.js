const mongoose = require('mongoose');
const { recipeModel } = require('./Recipe');

const itemModel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  sourceSheet: String,
  patternTitle: String,
  diy: Boolean,
  patternCustomize: Boolean,
  size: String,
  sourceNotes: String,
  version: String,
  interact: Boolean,
  tag: String,
  speakerType: String,
  lightingType: String,
  catalog: String,
  set: String,
  series: String,
  customizationKitCost: Number,
  variants: [
    {
      image: String,
      variation: String,
      filename: String,
      varientID: String,
      uniqueEntryID: String,
      pattern: String,
      bodyCustomize: Boolean,
      bodyTitle: String,
      internalId: Number,
      buy: Number,
      sell: Number,
      colors: [],
      themes: [],
    },
  ],
  //recipe: [recipeModel],
});

module.exports = mongoose.model('Item', itemModel);
