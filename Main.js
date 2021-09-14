function action()
{
  //Input
  var input = document.getElementById('input');
  var str = input.value;

  //Label
  var label1 = document.getElementById('message');

  if(str == ''){
    label1.textContent = '書いてください';
  }else {
    label1.textContent = str;
  }
}
