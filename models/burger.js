module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    Burger.belongsTo(models.Customer, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };
  return Burger;
};

