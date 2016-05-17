var links=[
  
  ['Home', 'index.html'],
  ['Manifesto', 'manifesto.html'],
  ['Press Release', 'press.html'],
  ['About Liam', 'aboutliam.html']
  
];

function insertDisc(iden){
  $(iden).append('<p><b>NOTE:</b> This is a website created for a school project, and has no links with the official Scottish Conservative Unionist Party. Scottish Conservatives, Scottish Conservative Unionist Party, the Tory Tree logo, the blue UK flag (used as the background image on this page), and all other trademarks belong to the Scottish Conservative Unionist Party, the UK Conservative Party, and/or their respective owners.</p><br><div class="copy">&copy; 2016 Unofficial Scottish Conservative Unionist Party</div>');
}

function bar() {
  var element='';
  var out='<div><a href="index.html"><img src="resources/logo.jpg" id="headerlogo" /></a><h1><a href="index.html" class="hrefwou">Scottish Conservatives</a></h1></div><table id="headertable"><tr>';
  var bar='';
  for (i = 0; i < links.length; i++) {
    if (links.length-i > 1) {bar = ' | ';}
    else {bar = '';}
    out+="<td><a class='hrefwou' href='"+links[i][1]+"'>"+links[i][0]+"</a>"+bar+"</td>";
  }
  out+='</tr></table>';
  $('#bar').html(out);
  insertDisc('#note');
}

function redir(redirectDestination) {
  window.location.href = redirectDestination;
  return 1;
}

$(document).ready( function() {
    $("head").append('<link rel="icon" type="image/png" href="resources/logo.png" />');
  }
);
