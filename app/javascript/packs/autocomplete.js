import places from 'places.js';

const initAutocomplete = () => {
  var placesAutocomplete = places({
    container: document.getElementById('user_street'),
    templates: {
      value: function(suggestion) {
        return suggestion.name;
      }
    }
  }).configure({
    type: 'address'
  });

  placesAutocomplete.on('change', function resultSelected(e) {
    document.getElementById('user_city').value = e.suggestion.city || '';
    document.getElementById('user_zip_code').value = e.suggestion.postcode || '';
  });
};




export { initAutocomplete };






