'use strict';

$(document).ready(function () {
  $('.js_addressGroupShow').select2();
});

$(document).ready(function () {
  $('.jsGroupAddMultiple').select2();

  var input = $('.input-block input');
  input.on('input', function () {
    if (input.val() !== '') {
      $(this).parent().addClass('input-active');
    }
  });
});
//# sourceMappingURL=script.js.map
