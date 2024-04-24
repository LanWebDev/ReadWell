import Image from "next/image";
import Link from "next/link";
import picture from "@/assets/sign-in-out-picture.jpg";
import LoginForm from "@/components/auth/LoginForm";
import Social from "@/components/auth/Social";

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
              <Social />
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
