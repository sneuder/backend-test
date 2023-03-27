import { getAllAdmins } from "../database/index.js";

export const controller = (req, res) => {
  getAllAdmins()
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json("Internal Server Error");
    });
};
