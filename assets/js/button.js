window.addEvent('domready', function() {
  var submit_value = $('submit_btn').value;
  $('disable_submit').addEvent('click', function() {
    if ( $('disable_submit').checked ) {
      $('submit_btn').addClass('submit_btn_disabled');
      $('submit_btn').removeClass('submit_btn');
      $('submit_btn').setProperty('disabled', true);
      $('submit_btn').value = '';
    } else {
      $('submit_btn').addClass('submit_btn');
      $('submit_btn').removeClass('submit_btn_disabled');
      $('submit_btn').setProperty('disabled', false);
      $('submit_btn').value = submit_value;
    }
  });
});