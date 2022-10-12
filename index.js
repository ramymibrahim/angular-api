const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose");
const categoryRouter = require("./routes/CategoryRoutes");
const productRouter = require("./routes/ProductRoutes");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://angular_api_db_user:BUlxg3G5Vtrt7xL7@cluster0.135prxp.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use("/api/categories", categoryRouter)
  .use("/api/products", productRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
