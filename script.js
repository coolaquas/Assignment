// find elements
var banner = $("#banner-message")
var output = $(".output")
var button1 = $("#input-1")
var button2 = $("#input-2")
var button3 = $("#input-3")
var output1 = $("#output-1")
var output2 = $("#output-2")
var output3 = $("#output-3")
// Assignment 1.1
button1.on("click", () => {
  banner.toggleClass("alt");
  output.show();
  output1.show();
  output2.hide();
  output3.hide();
  $.ajax({url: "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&per_page=1", success: function(result){
   $("#output-1").html("Description :" + result.items[0].description);
      }});
 });
 
// Assignment 1.2 
 button2.on("click", () => {
      banner.toggleClass("alt");
      output.show();
      output1.hide();
      output2.show();
      output3.hide();
      $.ajax({url: "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&per_page=5", success: function(result){
      var out =(result.items[0].description) + "<br/>";
      for(i=1;i<result.items.length;i++) {
        out += (result.items[i].description) + "<br/>";
       };
      $("#output-2").html(out);
		}});
  });
    
// Assignment 1.3
button3.on("click", () => {
  banner.toggleClass("alt");
  output.show();
  output1.hide();
  output2.hide();
  output3.show();
  $.ajax({url: "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&per_page=5", success: function(result){
    var id = (result.items[0].id) + "<br/>";
    var node_id =(result.items[0].node_id) + "<br/>";
    var name =(result.items[0].name) + "<br/>";
      for(i=1;i<result.items.length;i++) {
        id += (result.items[i].id) + "<br/>";
        node_id += (result.items[i].node_id) + "<br/>";
        name += (result.items[i].name) + "<br/>";
       };
    $("#output-3").html(id).append(node_id).append(name);
  }});
});
