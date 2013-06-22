window.onload = function(){
  var a = document.getElementById('monthly');
  var tgtTag = document.getElementById('tgtTag');
  a.addEventListener('click', function(e){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'products/monthly');
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status === 200){
        var response = JSON.parse(xhr.responseText);
        tgtTag.innerHTML = response.title;
      }
    };
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(null);
    e.preventDefault();
  });
};
