module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len:[1]
        }
    });

    // give customer burger...customer "has many" burger
    Customer.associate = function (models) {
        Customer.hasMany(models.Burger, {
        });
    };
    return Customer;
};
