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

  if ($('.jsManager').length > 0) {
    var manager = document.querySelector('.jsManager');
    var managerBlock = manager.querySelector('.select2-selection--multiple');
    managerBlock.onblur = function () {
      var select = manager.querySelectorAll('.select2-selection__rendered li');
      if (select.length > 1) {
        this.closest('.select2-selection--multiple').classList.add('select-active');
      }
    };

    var phone = document.querySelector('.jsPhone');
    var phoneBlock = phone.querySelector('.select2-selection--multiple');
    phoneBlock.onblur = function () {
      var select = phone.querySelectorAll('.select2-selection__rendered li');
      if (select.length > 1) {
        this.closest('.select2-selection--multiple').classList.add('select-active');
      }
    };
  }
  if ($('.jsAddrAdd').length > 0) {
    var addrAdd = document.querySelector('.jsAddrAdd');
    var addrAddBlock = addrAdd.querySelector('.select2-selection--multiple');
    addrAddBlock.onblur = function () {
      var select = addrAdd.querySelectorAll('.select2-selection__rendered li');
      if (select.length > 1) {
        this.closest('.select2-selection--multiple').classList.add('select-active');
      }
    };
  }
});

$(document).ready(function () {
  $('.jsBtnLogin').click(function () {
    event.preventDefault();
    $('.jsOpenModal').fadeIn();
    $('.jsLogin').fadeIn();
    // $('.jsBlockLogReb').hide();
    $('body').addClass('body-overflow');
  });
  $('.jsBtnReg').click(function () {
    event.preventDefault();
    $('.jsOpenModal').fadeIn();
    $('.jsReg').fadeIn();
    // $('.jsBlockLogReb').hide();
    $('body').addClass('body-overflow');
  });
  $('.jsOpenReg').click(function () {
    event.preventDefault();
    $('.jsLogin').hide();
    $('.jsReg').fadeIn();
  });
  $('.jsOpenLogin').click(function () {
    event.preventDefault();
    $('.jsReg').hide();
    $('.jsLogin').fadeIn();
  });
  $('.jsOverlay').click(function () {
    $('.jsOpenModal').fadeOut();
    $('.jsReg').fadeOut();
    $('.jsLogin').fadeOut();
    $('body').removeClass('body-overflow');
  });
});

$(document).ready(function () {
  $('.jsSendSelect').select2({
    placeholder: 'Choose an phone'
  });

  $('.jsTemplateSelect').select2({
    placeholder: 'Choose an template'
  });
});
//# sourceMappingURL=script.js.map
