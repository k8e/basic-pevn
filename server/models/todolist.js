module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define('TodoList', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  TodoList.associate = (models) => {
    TodoList.hasMany(models.TodoItem, {
      foreignKey: 'listId',
      as: 'listItems',
    });
  };

  return TodoList;
};