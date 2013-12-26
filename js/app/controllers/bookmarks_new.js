/**
 * Created by mahmoud on 12/25/13.
 */
App.BookmarksNewController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var self = this;
      var bookmark = self.get('model');
      bookmark.save().then(
        function() {
          self.transitionToRoute("bookmarks");
        }
      )
    }
  }
});
