QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("check renderQuestions function", function( assert ){
  var resultsNode = document.getElementById("Results-Container");
  assert.equal(resultsNode.innerHTML,"","check resultsNode initially empty")

  RenderModule.renderQuestions(testResponse);
  var resultlist = document.body.querySelectorAll("#links");
  var link = "http://stackoverflow.com/questions/42627119/insert-a-row-in-a-table-jquery"
  var title = "Insert a row in a table JQuery";
  assert.equal(resultlist[0].href,link,"check first item has correct link")
  assert.equal(resultlist[0].innerHTML,title,"check first item has correct title")
  assert.equal(resultlist.length,30, "check list is correct length (30 objects)")
})

QUnit.test("check renderUsers function", function( assert ){
  RenderModule.renderUsers(testUserResponse);
  var resultlist = document.body.querySelectorAll("#links");
  var link = "http://stackoverflow.com/users/19068/quentin"
  var title = "Insert a row in a table JQuery";
  assert.equal(resultlist[0].href,link,"check first item has correct link")
  // assert.equal(resultlist[0].innerHTML,title,"check first item has correct title")
  // assert.equal(resultlist.length,30, "check list is correct length (30 objects)")
})
