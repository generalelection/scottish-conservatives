var links=[
  
  ['Home', 'index.html']
  
];

function bar() {
  var element='';
  var out='<div style="text-align: center;" class="header"><img src="http://www.escapecrate.co.uk/wp-content/uploads/2006/09/tory_tree.jpg" style="width:20%" /><h1>  Scottish Conservatives</h1></div><table><tr style="text-align:center;">';
  var bar='';
  for (i = 0; i < links.length; i++) {
    if (links.length-i > 1) {bar = ' | ';}
    else {bar = '';}
    out+="<td><a style='text-decoration: none; color: rgb(17, 136, 195);' href='"+links[i][1]+"'>"+links[i][0]+"</a>"+bar+"</td>";
  }
  out+='</tr></table>';
  document.getElementById('bar').innerHTML = out;
  
}
