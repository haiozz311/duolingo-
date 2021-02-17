const express = require("express");
const {
  createRole,
  getRole,
  deleteRoleById,
  updateRole,
} = require("../services/Role.service");
const { authenticate, authorization } = require("../middleware/auth/index");
const router = express.Router();

router.get(
  "/role",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  getRole
);
router.post(
  "/role",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  createRole
);
router.put(
  "/role/:id",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  updateRole
);
router.delete(
  "/role/:roleId",
  authenticate,
  authorization(["602b1b874b9eab3104d7d154"]),
  deleteRoleById
);
module.exports = router;
