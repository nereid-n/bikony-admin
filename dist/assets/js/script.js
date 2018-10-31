'use strict';

$(document).ready(function () {
  $('.js_addressGroupShow').select2();
});

$(document).ready(function () {
  $('.jsGroupAddMultiple').select2({
    dropdownAutoWidth: true
  });

  var input = document.querySelectorAll('.input-block input');
  for (var i = 0; i < input.length; i++) {
    input[i].oninput = function () {
      if (this.value !== '') {
        this.closest('.input-block').classList.add('input-active');
      }
    };
  }
});
//# sourceMappingURL=script.js.map
