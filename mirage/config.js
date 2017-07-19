export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.get('/persones');
  this.get('/goals', {
    'data': [{
      "id":"28",
      "attributes":{
        "title":"goal1",
        "score": 1},
        "type":"goals"
      }, {
        "id":"29",
        "attributes":{
          "title":"goal2",
          "score": 2},
          "type":"goals"
        }]
  });

  this.post('/goals', (schema, request) => {
    return schema.goals.create();
  })
  this.post('/persones', (schema, request) => {
    return schema.persones.create();
  })

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
