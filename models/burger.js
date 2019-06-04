module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgers_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};

// var burger = {
//     // function to select all burgers
//     selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },

//     // function to insert one new data
//     insertOne: function(cols, vals, cb) {
//       orm.insertOne("burgers", cols, vals, function(res) {
//         cb(res);
//       });
//     },

//     // function to update one existing data
//     updateOne: function(burger_id, callback){
//       orm.updateOne("burgers",burger_id, function(res){
//         callback(res);
//       });
//     }
//   };
  
//   // Export the database functions for the controller (burgers_controller.js).
//   module.exports = burger;