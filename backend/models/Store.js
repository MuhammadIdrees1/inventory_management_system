const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  store: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // totalSales: {
  //   type: String,
  // },
  // totalPurchase: {
  //   type: String,
  // },
  userId: { type: String, required: true },
});

const Store = mongoose.model("stores", StoreSchema);

module.exports = Store;
