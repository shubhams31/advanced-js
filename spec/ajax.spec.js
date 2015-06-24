require("../www/discography/js/lib/ajax.js");

describe("Ajax interface", function() {
  it("has a get method", function() {
    expect(Ajax.get).toBeDefined();
  });

  it("get method should invoke callback", function(done) {
    XMLHttpRequest.withResponse(function(response) {
      response.responseText = JSON.stringify([1, 2, 3]);

      Ajax.get("/foo", function(array) {
        expect(response.requestMethod).toEqual("GET");
        expect(response.requestURL).toEqual("/foo");
        expect(array.length).toEqual(3);

        // Tell Jasmine we were called.  MUST call the `done' function
        // *after* all expectations or the tests will silently pass :(
        done();
      });
    });
  });
});