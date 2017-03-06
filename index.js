var RenderModule = (function(){

    function renderQuestions(response){
      var responseArray =response.items;
      var resultsNode = document.getElementById("Results-Container");
      var newresultsNode = document.createElement("ul")
      newresultsNode.id = "Results-Container"
      var parentNode = document.getElementById("Results-Container-Wrapper")
      responseArray.forEach(function(element){
          var listNode = document.createElement('li');
          var itemNode = document.createElement('a');


          var title= element.title;
          var link= element.link;

          itemNode.id = "links";
          itemNode.href=link;
          itemNode.innerHTML=title;
          listNode.appendChild(itemNode);
          newresultsNode.appendChild(listNode);
        });
        parentNode.replaceChild(newresultsNode,resultsNode);
    };

    function renderUsers(response){
      var responseArray =response.items;
      var resultsNode = document.getElementById("Results-Container");
      var newresultsNode = document.createElement("ul")
      newresultsNode.id = "Results-Container"
      var parentNode = document.getElementById("Results-Container-Wrapper")
      responseArray.forEach(function(element){
          var listNode = document.createElement('li');
          var itemNode = document.createElement('a');


          var display_name = element.user.display_name;
          var link = element.user.link;
          var score = element.score;

          itemNode.id = "links";
          itemNode.href=link;
          itemNode.innerHTML=display_name+"<br>Score:"+score;
          listNode.appendChild(itemNode);
          newresultsNode.appendChild(listNode);
        });
        parentNode.replaceChild(newresultsNode,resultsNode);
    }
    return {
      renderQuestions:renderQuestions,
      renderUsers:renderUsers
    }
  })();

  var RequestModule = (function(){

    function makeRequest(method,url,callback){
        var xhr= new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            callback(response);
          }
        }
        xhr.open(method,url);
        xhr.send();
      };

    return {
      makeRequest:makeRequest
    }
  })();
