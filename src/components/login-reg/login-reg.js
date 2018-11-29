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
