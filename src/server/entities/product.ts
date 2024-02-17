export interface IProduct {
  _id: string
  name: string
  value: number
  amount: number
  description: string
  photo: string
  createdAt: Date
  __v: number
}

export interface IProductDTO {
  name: string
  value: number
  amount: number
  description: string
  photo: string
}
