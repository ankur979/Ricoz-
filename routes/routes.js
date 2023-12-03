const routes = require("express").Router();
const items = require("../controllers/items");

routes.get("/items", items.getItems);
routes.post("/items", items.createItem);
routes.put("/items/:id", items.updateItem);
routes.delete("/items/:id", items.deleteItem);

module.exports = routes;
