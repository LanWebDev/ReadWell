import Image from "next/image";
import Link from "next/link";
import picture from "@/assets/sign-in-out-picture.jpg";
import LoginForm from "@/components/auth/LoginForm";

export default function Signin() {
  return (
    <div className="flex justify-center items-center pt-[6.5rem]  ">
      <div className="w-full  lg:grid lg:grid-cols-2 h-[100vh]">
        <div className="hidden bg-muted lg:block">
          <Image
            src={picture}
            alt="Reading"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale opacity-90"
          />
        </div>
        <div className="flex items-center justify-center py-40">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <LoginForm />
              <p className="text-sm text-center">or</p>
              <div className="flex flex-row">
                <button
                  type="button"
                  className="text-black bg-white border border-black/30 hover:border-black   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   justify-center w-full mr-2"
                >
                  <Image
                    src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                    alt="google icon"
                    width={20}
                    height={20}
                    className="w-4 h-4 me-2"
                  />
                  Google
                </button>
                <button
                  type="button"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90    font-medium rounded-lg text-sm px-5 py-2.5 text-center  inline-flex items-center  dark:hover:bg-[#050708]/30  justify-center w-full"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Github
                </button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link href="/auth/signup" className="hover:opacity-80">
                Don&apos;t have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
