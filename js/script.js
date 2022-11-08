function init(){
//add your javascript between these two lines of code
  function alertF(){
    var input = document.getElementById('entryinput').value;
    var output = document.getElementById('textoutput');
    output.innerHTML = input;
    alert("Lucas Vinicius Costa Wang: " + input);
  }
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', alertF);
)
window.addEventListener('load', init);