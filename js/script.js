$(document).ready(function(){
  $(".but").click(function(){
    var num =$(this).val();
    $(".top").val(num);
  });
});