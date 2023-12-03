const routes = require("express").Router();
const items = require("../controllers/items");

routes.get("/item", items.getItems);
routes.post("/item", items.createItem);
routes.put("/item/:id", items.updateItem);
routes.delete("/item/:id", items.deleteItem);

module.exports = routes;
