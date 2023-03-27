export const authSchema = {
  email: {
    type: String,
    require: true,
  },
  user: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
}

export const cmsSchema = {
  cms: [
    {
      name: {
        type: String,
        require: true,
      },
      organization: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      key: {
        type: String,
        require: true,
      },
    },
  ],
}
