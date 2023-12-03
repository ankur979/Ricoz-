const Item = require("../models/items");
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (e) {
    console.error("Error fetching items:", e.message);
    res.status(500).json({ message: e.message });
  }
};

const createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const items = await Item.create({
      name,
      description,
    });
    res.status(200).json(items);
  } catch (e) {
    console.error("Error fetching items:", e.message);
    res.status(500).json({ message: e.message });
  }
};

const updateItem = async (req, res) => {
  const { name, description } = req.body;
  const itemId = req.params.id;
  try {
    if (!itemId) {
      return res
        .status(400)
        .json({ message: "Item ID is required for updating." });
    }

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { name, description },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.status(200).json(updatedItem);
  } catch (e) {
    console.error("Error updating item:", e.message);
    res.status(500).json({ message: e.message });
  }
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    if (!itemId) {
      return res
        .status(400)
        .json({ message: "Item ID is required for deletion." });
    }
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found." });
    }

    res.status(200).json({
      message: "Item deleted successfully.",
    });
  } catch (e) {
    console.error("Error deleting item:", e.message);
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
