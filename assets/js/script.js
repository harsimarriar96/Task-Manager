
$(document).ready(function() {

  $(document).keypress(function() {
    $('input[type=text]').focus();
  })
  $('ol.tasks').sortable();
  var tasks = [];
  $('.add-new-task input').keypress(function(e){
    if(e.which == 13) {
      tasks.push($(this).val());
      $('ol.tasks').append('<li class="task">' + $(this).val() + '<input type="checkbox" /></li>');
      $(this).val('');
    }
  });
});
