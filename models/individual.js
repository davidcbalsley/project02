module.exports = function(sequelize, DataTypes) {
    var Individual = sequelize.define("Individual", {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      state: DataTypes.STRING
    });

    return Individual;
  };