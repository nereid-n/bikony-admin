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
});
