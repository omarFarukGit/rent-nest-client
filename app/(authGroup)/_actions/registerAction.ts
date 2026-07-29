"use server"

type TPreveState = {
  name: string
  email: string
  password: string
  role: "TENANT" | "LANDLORD"
}

export const registerAction = async (
  prevState: TPreveState,
  fromData: FormData
) => {
  const payload = {
    name: fromData.get("name"),
    email: fromData.get("email"),
    password: fromData.get("password"),
    role: fromData.get("role"),
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-cache",
  })

  const result = await res.json()

  return result
}
