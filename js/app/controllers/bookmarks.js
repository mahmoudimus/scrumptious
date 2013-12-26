/**
 * Created by mahmoud on 12/20/13.
 */
/*
Array controller is a specific type of controller that manages
a list of models that represent our data

- Proxy content to the view
- Router is responsible to set the controllers content with the data that's
 provided by the store
 - Remember, data is fetched from the store,
   delegates content to the controller
*/
App.BookmarksController = Ember.ArrayController.extend({

  actions: {
    pushSort: function(attribute) {
      var self = this;
      if(self.get('sortProperties.firstObject') == attribute) {
        self.toggleProperty('sortAscending');
      } else {
        self.set("sortProperties", [attribute]);
        self.set('sortAscending', true);
      }
    }
  },
  favorites: function() {
    return this.filterProperty("favorite", true);
  }.property("@each.favorite"),

  regular: function() {
    return this.filterProperty("favorite", false);
  }.property("@each.favorite")
});
