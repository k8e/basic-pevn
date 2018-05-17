const listController = require('../controllers').List;

module.exports = {

  create(req, res) {
    return listController.create(req.body.title)
      .then(newList => res.status(201).send(newList))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return listController.list()
      .then(allLists => res.status(200).send(allLists))
      .catch(error => res.status(400).send(error.message));
  },

  retrieve(req, res) {
    return listController.retrieve(req.params.listId)
      .then(foundList => {
        if (!foundList) {
          return res.status(404).send({
            message: 'List not found!',
          });
        }
        return res.status(200).send(foundList);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return listController.update(req.params.listId, req.body.title)
      .then(updatedList => res.status(200).send(updatedList))
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return listController.delete(req.params.listId)
      .then(todo => res.status(200).send({ message: 'List deleted successfully.' }))
      .catch(error => res.status(400).send(error));
  },

};