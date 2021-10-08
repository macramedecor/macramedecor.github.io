/* Mobile Header */
$('#hamburgercheck').change(function() {
    if ($('#hamburgercheck').is(":checked")) {
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-x', 'hidden');
      $('body').css('overflow-y', 'auto');
    }
});

$('.nav-link').click(function() {
    if ($('#hamburgercheck').is(":checked")) {
      $('#hamburgercheck').prop('checked', false);
      $('body').css('overflow-x', 'hidden');
      $('body').css('overflow-y', 'auto');
    }
});