const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("コネクションおk");
  })
  .catch((err) => {
    console.log("コネクションエラー");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: [0,"priceは0より大きい値にしてください"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});
const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "マウンテンバイク",
  price: 59800,
  categories: ["サイクリング", "安全装備"],
});
bike
  .save()
  .then((data) => {
    console.log("成功");
    console.log(data);
  })
  .catch((err) => {
    console.log("エラー");
    console.log(err);
  });
