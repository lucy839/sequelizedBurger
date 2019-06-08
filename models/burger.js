module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len:[1]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  // link burger to customer...burger "belongs to" customer
  Burger.associate = function(models) {
    Burger.belongsTo(models.Customer, {
    });
  };
  return Burger;
};

