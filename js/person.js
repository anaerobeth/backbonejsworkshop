//create a backbone model
//class or object
var Person = Backbone.Model.extend();

//instance
var person = new Person({
  name: 'Dan'
});

//create view
var PageView = Backbone.View.extend({
  //property
  template: Handlebars.compile($('#person-template')).html()),
  // person template is a script tag in index.html
  // placeholders are filled in when rendered

  //method
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    //take model, use model data then render template to run
    //replace with jquery wrapped version 
    return this;
  }
});

//create an instance of the 
var pageView = new PageView({
  el: '#container',
  model: person
});

//render the view
pageView.render;
 
