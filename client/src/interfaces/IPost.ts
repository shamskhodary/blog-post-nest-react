 interface IUser {
  id: number
  email: string
  username: string
  gender: string
  image: string
  token: string
}

export default interface IPosts {
  id: number
  title: string
  content: string
  image: string
  createdAt: string
  user: IUser
  userId: number
}

export interface IPostState {
  posts: IPosts[] | null
  one: IPosts | null
}
