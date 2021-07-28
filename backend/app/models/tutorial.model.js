import DataTypes from "sequelize"

export default (sequelize) => {
    return sequelize.define("tutorial", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    }, {

    });
};