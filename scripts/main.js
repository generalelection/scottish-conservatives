var links=[
  
  ['Home', 'index.html'],
  ['Manifesto', 'manifesto.html'],
  ['About Liam', 'aboutliam.html']
  
];

function bar() {
  var element='';
  var out='<div style="text-align: center; margin:auto;" class="header"><img src="resources/tory_tree.jpg" style="width:20%" /><h1>Scottish Conservatives</h1></div><table style="text-align:center; margin:auto;"><tr style="text-align:center; margin:auto;">';
  var bar='';
  for (i = 0; i < links.length; i++) {
    if (links.length-i > 1) {bar = ' | ';}
    else {bar = '';}
    out+="<td><a style='text-decoration: none; color: rgb(17, 136, 195);' href='"+links[i][1]+"'>"+links[i][0]+"</a>"+bar+"</td>";
  }
  out+='</tr></table>';
  document.getElementById('bar').innerHTML = out;
  
}

function redir(redirectDestination) {
window.location.href = redirectDestination;
return 1;
}
