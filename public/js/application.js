$(document).ready(function() {

    var comment_ul = document.getElementById('comment_list');
    var newcomment = document.createElement('li');
    var newform = document.createElement('form');

var createForm = function() {
    $form = $("<form action=/create_comment method=post></form");
    $form.append("<input type=text name=comment placeholder='comment goes here'/>");
    $form.append("</br>");
    $form.append("<input type=text name=author placeholder='author goes here'/>");
    $form.append("</br>");
    $form.append("<input id='submitcomment' type=submit value=create>");
    $('.container').append($form);
};
    $('#new_comment_button').click(function() {
      $('#new_comment_button').hide();
      createForm();

    $("#submitcomment").on("click", function(event) {
      event.preventDefault() 

  });



      // createForm();
      // comment_ul.appendChild(newcomment);
    // $(document).getElementById('#comment_list').appendChild(newcomment);
  
    });
    
});

    


// var createForm = function() {
//     var comment = document.createElement("input");
//     comment.setAttribute('type', "text");
//     comment.setAttribute('name','comment');
//     comment.setAttribute('placeholder',"enter your comment here...")
    
//     var author = document.createElement("input");
//       author.setAttribute('type',"text");
//       author.setAttribute('name','author');
//       author.setAttribute('placeholder',"your name here please...")
    
//     var submit = document.createElement("input");
//       submit.setAttribute('type',"submit");
//       submit.setAttribute('value',"create comment");
    
//     var linebreak = document.createElement("br");
//     var linebreak2 = document.createElement("br");
    
//       $('.container').append(newform);
//       newform.appendChild(comment);
//       newform.appendChild(linebreak);
//       newform.appendChild(author);
//       newform.appendChild(linebreak2); 
//       newform.appendChild(submit);
// };
