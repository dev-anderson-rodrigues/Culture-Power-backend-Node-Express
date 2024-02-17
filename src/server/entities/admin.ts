export interface IAdmin {
  _id?: string
  name: string
  email: {
    type: string
    required: true
    unique: true
  }
  password: string
  createdAt: Date
  __v: number
}

export interface IAdminDTO {
  name: string
  email: string
  password: string
}
