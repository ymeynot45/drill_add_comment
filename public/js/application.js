$(document).ready(function() {

  // lines 4-6 could be done with jQuery as var comment_ul = $('#comment_list'); etc
  var comment_ul = document.getElementById('comment_list');
  var newcomment = document.createElement('li');
  var newform = document.createElement('form');

  var createForm = function() {
    return "<form id='js_form' action='create_comment' method='POST'>" +
    "<input id='comment' type='text' name='comment' placeholder='comment goes here'/> </br>" +
    "<input id='author' type='text' name='author' placeholder='author goes here'/> </br>" +
    "<input id='submitcomment' type='submit' value='create'>" +
    "</form>";
  };

  var createComment = function(comment, author) {
    return "<li>" + comment + "<span class='author'>" + author + "</span>" + "</li>";
  }
    
  $('#new_comment_button').click(function() {
    $('#new_comment_button').hide();
    $('.container').append(createForm());


    $("#submitcomment").on("click", function(event) {
      event.preventDefault();
      var comment = $('#comment').val();
      var author  = $('#author').val(); 
      $('#js_form').hide();
      $('#new_comment_button').show();
      if (comment != "")
      {
        // debugger;
        $('#comment_list').append(createComment(comment,author));
      }







      // debugger;



      // console.log(event);
      
    });

  });


      // createForm();
      // comment_ul.appendChild(newcomment);
    // $(document).getElementById('#comment_list').appendChild(newcomment);
    
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
