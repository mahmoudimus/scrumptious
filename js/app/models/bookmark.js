/**
 * Created by mahmoud on 12/24/13.
 */
App.Bookmark = DS.Model.extend({
  title: DS.attr("string"),
  url: DS.attr("string"),
  favorite: DS.attr("boolean"),

  changedFavorite: function() {
    var self = this;
    self.save().then(function() {
      console.log("Transaction was commited.");
    });
  }.observes("favorite")

});
