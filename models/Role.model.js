const mongoose = require("mongoose");
const RoleSchema = mongoose.Schema({
  name_Role: { type: String, required: true },
});

const Role = mongoose.model("Role", RoleSchema, "Role");
module.exports = {
  RoleSchema,
  Role,
};
