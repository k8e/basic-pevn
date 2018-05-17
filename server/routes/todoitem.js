const itemController = require('../controllers').Item;

module.exports = {

  create(req, res) {
    return itemController.create(req.params.listId, req.body.content)
    .then(listItem => res.status(201).send(listItem))
    .catch(error => res.status(400).send(error.message));
  },

  update(req, res) {
    return itemController.update(
      req.params.listId, 
      req.params.listItemId, 
      req.body.content, 
      req.body.isComplete
    ) 
    .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
    .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return itemController.delete(req.params.listId, req.params.listItemId)
      .then(() => res.status(204).send())
      .catch(error => res.status(400).send(error));
  },

};