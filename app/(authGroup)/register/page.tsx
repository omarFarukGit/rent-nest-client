import Link from "next/link"
import LogingForm from "../_components/LoginFrom"
import RegisterFrom from "../_components/RegisterFrom"

const RegisterPage = () => {
  return (
    <>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-4 shadow-lg">
          {/* From Text  */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-gray-500">
              Enter your information to create your account.
            </p>
          </div>

          {/* From  */}
          <RegisterFrom />
          <div className="flex items-center justify-center">
            <p className="text-xs text-gray-500">
              Already have an account?{" "}
              <Link href={"/login"} className="text-red-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
