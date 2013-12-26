/**
 * Created by mahmoud on 12/24/13.
 */

App.BookmarksNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('bookmark');
  }
});
