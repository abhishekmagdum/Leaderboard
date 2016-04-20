PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
// this code only runs on the client

Template.leaderboard.helpers({

  'player': function(){
    return PlayersList.find()
  },

});

Template.leaderboard.events({



'click .player': function(){
  var playerId = this._id;
  Session.set('selectPlayer', playerId);
  var selectedPlayer = Session.get('selectedPlayer');

},



});



}

//This is really cool stuff right here
