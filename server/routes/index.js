const listRoutes = require('./todolist');
const listItemRoutes = require('./todoitem');

module.exports = (app) => {

  // List API Methods
  app.get('/api/lists',                 listRoutes.list);
  app.get('/api/lists/:listId',         listRoutes.retrieve);
  app.put('/api/lists/:listId',         listRoutes.update);
  app.delete('/api/lists/:listId',      listRoutes.delete);
  app.post('/api/lists', function (req, res) {
    listRoutes.create(req, res);
  });

  // List Item API Methods
  app.post('/api/lists/:listId/items',                listItemRoutes.create);
  app.put('/api/lists/:listId/items/:listItemId',     listItemRoutes.update);
  app.delete('/api/lists/:listId/items/:listItemId',  listItemRoutes.delete);

  // Catch all others
  app.all('/api/todos/:listId/items', (req, res) =>
    res.status(405).send({
      error: 'Permission denied.',
    })
  );
};