const moongoose = require("mongoose");

// mongoose.set("strictQuery", true);

async function connect(url) {
  return moongoose.connect(url);
}

module.exports = {
  connect,
};
