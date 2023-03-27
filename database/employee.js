import { Schema, model } from "mongoose";
import { authSchema, cmsSchema } from "./partials/index.js";

const employeeSchema = new Schema({
  ...authSchema,
  role: {
    type: String,
    default: "employee",
    immutable: true,
  },
  fr_name: {
    type: String,
    require: true,
  },
  ls_name: {
    type: String,
    require: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
  },
  ...cmsSchema,
});

employeeSchema.set("toJSON", {
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

const Employee = model("Employee", employeeSchema);
export default Employee;
