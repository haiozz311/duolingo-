const express = require("express");
const {
  createRole,
  getRole,
  deleteRoleById,
  updateRole,
} = require("../services/Role.service");
const { authenticate, authorization } = require("../middleware/auth/index");
const router = express.Router();

router.get("/role", authenticate, authorization(["AD"]), getRole);
router.post("/role", authenticate, authorization(["AD"]), createRole);
router.put("/role/:id", authenticate, authorization(["AD"]), updateRole);
router.delete("/role/:roleId", authenticate, authorization(["AD"]), deleteRoleById);
module.exports = router;
