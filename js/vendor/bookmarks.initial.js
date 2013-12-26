/**
 * Created by mahmoud on 12/19/13.
 */

var globalCounter = 0;

var Bookmark = Ember.Object.extend({
    to_link: function () {
        return "<a href='" + this.get('url') + "'>"
                + this.get('name')
                + "</a>";
    }
,   formatted: function() {
        return this.get('name') + " - " + this.get('url');
    }
,   link: function() {
        return this.to_link();
    }.property('name', 'url')
,   updateCounter: Ember.observer(function () {
      globalCounter += 1;
      console.log("Global counter has increased to " + globalCounter);
    }, "name")
});
var bookmark = Bookmark.create({
    name: 'Tuts+ Premium',
    url: 'https://tutsplus.com'
});

