module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.TodoList, {
      foreignKey: 'listId',
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};