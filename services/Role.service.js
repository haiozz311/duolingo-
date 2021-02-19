const { Role } = require("../models/Role.model");

module.exports.getRole = (req, res, next) => {
  return Role.find()
    .then((Roles) => {
      return res.status(200).json(Roles);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports.createRole = (req, res, next) => {
  const { name_Role } = req.body;
  return Role.create({ name_Role })
    .then((role) => {
      return res.status(200).json(role);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports.deleteRoleById = (req, res, next) => {
  const { roleId } = req.params;
  let _role;
  Role.findById(roleId)
    .then((role) => {
      if (!role)
        return Promise.reject({
          status: 404,
          Message: "Role Not Found",
        });
      _role = role;
      return role.deleteOne();
    })
    .then(() => res.status(200).json({ message: "xóa thanh công" }))
    .catch((err) => res.status(500).json(err));
};

module.exports.updateRole = (req, res, next) => {
  const { id } = req.params;
  const { name_Role } = req.body;
  Role.findById(id)
    .then((role) => {
      if (!role) {
        return Promise.reject({ status: 404, message: "Role Not Found" });
      }
      role.name_Role = name_Role;
      return role.save();
    })
    .then((role) => res.status(200).json(role))
    .catch((err) => {
      return res.status(500).json(err);
    });
};
