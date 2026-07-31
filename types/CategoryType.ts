export type TCategory = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export type TCategoriesResponse = {
  success: boolean
  message: string
  data: TCategory[]
}
