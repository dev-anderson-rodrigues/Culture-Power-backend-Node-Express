export interface ILogin {
  _id: string
  email: string
  password: string
}

export interface ILoginDTO {
  email: string
  password: string
}

export interface jwtPayload {
  id: string
}
