$(document).ready(function() {
  $('.jsGroupAddMultiple').select2({
    dropdownAutoWidth : true
  });

  let input = document.querySelectorAll('.input-block input');
  for (let i = 0; i < input.length; i++) {
    input[i].oninput = function() {
      if (this.value !== '') {
        this.closest('.input-block').classList.add('input-active');
      }
    }
  }

  if($('.jsManager').length > 0) {
    let manager = document.querySelector('.jsManager');
    let managerBlock = manager.querySelector('.select2-selection--multiple');
    managerBlock.onblur  = function() {
      let select = manager.querySelectorAll('.select2-selection__rendered li');
      if (select.length > 1) {
        this.closest('.select2-selection--multiple').classList.add('select-active');
      }
    };

    let phone = document.querySelector('.jsPhone');
    let phoneBlock = phone.querySelector('.select2-selection--multiple');
    phoneBlock.onblur  = function() {
      let select = phone.querySelectorAll('.select2-selection__rendered li');
      if (select.length > 1) {
        this.closest('.select2-selection--multiple').classList.add('select-active');
      }
    };
  }
  if($('.jsAddrAdd').length > 0) {
    let addrAdd = document.querySelector('.jsAddrAdd');
    let addrAddBlock = addrAdd.querySelector('.select2-selection--multiple');
    addrAddBlock.onblur = function () {
      let select = addrAdd.querySelectorAll('.select2-selection__rendered li');
      if (select.length > 1) {
        this.closest('.select2-selection--multiple').classList.add('select-active');
      }
    };
  }
});
