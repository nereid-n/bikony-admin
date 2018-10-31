$(document).ready(function() {
  $('.jsGroupAddMultiple').select2({
    dropdownAutoWidth : true
  });

  let input = $('.input-block input');
  input.on('input', function(){
    if (input.val() !== '') {
      $(this).parent().addClass('input-active');
    }
  })
});
