import { app } from "./index";

import { mongoose } from "./db";

const { PORT, URL_DB } = process.env;

mongoose.set("strictQuery", true);

const main = async () => {
  mongoose
    .connect(URL_DB!)
    .then(() => {
      app.listen(PORT || 3001, () => {
        console.log("Server running. Use our API on port: 3000");
      });
      console.log("Database connection successful");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

main();
