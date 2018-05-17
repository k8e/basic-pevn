const todoList = require('../models').TodoList;
const listItem = require('../models').TodoItem;

module.exports = {

  create(listTitle) {
    return todoList.create({
      title: listTitle,
    });
  },

  list() {
    return todoList.findAll({
      include: [{
        model: listItem,
        as: 'listItems',
      }],
    });
  },

  retrieve(listId) {
    return todoList.findById(listId, {
      include: [{
        model: listItem,
        as: 'listItems',
      }],
    })
    .then(foundList => {
      if (!foundList) {
        return Error("List not found!");
      }

      return foundList;
    });
  },

  update(listId, title) {
    return todoList.findById(listId, {
      include: [{
        model: listItem,
        as: 'listItems',
      }],
    })
    .then(foundList => {
      if (!foundList) {
        return Error("List not found!");
      }

      return foundList.update({
        title: title || foundList.title,
      })
      .catch((error) => Error(error.message));
    });
  },

  delete(listId) {
    return todoList.findById(listId)
      .then(foundList => {
        if (!foundList) {
          return Error("List not found!");
        }

        return foundList.destroy()
          .catch(error => Error(error.message));
      });
  },

};