import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div
          id="my_modal_3"
          className="border-[3px] border-pink-500 p-5 rounded-md"
        >
          <div>
            <h3 className="font-bold text-lg">SignUp Here, Bitte!</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name here....."
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email here....."
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password here....."
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Already registered?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Go back
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
