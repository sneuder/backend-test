import { Schema, model } from "mongoose";
import { authSchema, cmsSchema } from "./partials/index.js";

const adminSchema = new Schema({
  ...authSchema,
  role: {
    type: String,
    default: "admin",
    immutable: true,
  },
  organization: {
    type: String,
    require: true,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
  ...cmsSchema,
});

adminSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _id, __v, password, cms, ...rest } = returnedObject;

    const newCMS = cms.map((item) => {
      const { _id, key, ...restItem } = item;
      restItem.id = _id;
      return restItem;
    });

    return {
      id: _id,
      ...rest,
      cms: newCMS,
    };
  },
});

const Admin = model("Admin", adminSchema);
export default Admin;
