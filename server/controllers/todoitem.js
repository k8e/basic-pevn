const listItem = require('../models').TodoItem;

module.exports = {

  create(listId, content) {
    return listItem.create({
      content: content,
      listId: listId,
    });
  },

  update(listId, itemId, content, isComplete) {
    return listItem.find({
      where: {
        id: itemId,
        listId: listId,
      },
    })
    .then(listItem => {
      if (!listItem) {
        return Error("Item not found.");
      }

      return listItem.update({
          content: content || listItem.content,
          isComplete: isComplete || listItem.isComplete,
        })
        .catch(error => Error(error.message));
    })
    .catch(error => Error(error.message));
  },

  delete(listId, itemId) {
    return listItem.find({
      where: {
        id: itemId,
        listId: listId,
      },
    })
    .then(listItem => {
      if (!listItem) {
        return Error("Item not found.");
      }

      return listItem.destroy()
        .catch(error => Error(error.message));
    })
    .catch(error => Error(error.message));
  },

};