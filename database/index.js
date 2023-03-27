import Admin from "./admin.js";

export const getAllAdmins = () => {
  return Admin.find({});
};
