const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const FamilyDetailView = require('./views/family_detail_view.js')
const FamilyView = require('./views/family_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');

  const familyView = new FamilyView(selectElement);
  familyView.bindEvents();

  const familyDetailView = new FamilyDetailView();
  familyDetailView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

});
