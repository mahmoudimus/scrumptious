/**
 * Created by mahmoud on 12/24/13.
 */

App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('bookmark');
  }
});
