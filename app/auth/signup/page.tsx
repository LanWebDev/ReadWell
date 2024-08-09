import Image from "next/image";
import Link from "next/link";

import picture from "@/assets/sign-in-out-picture.jpg";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Signup() {
  return (
    <div className="flex justify-center items-center pt-[6.5rem] ">
      <div className="w-full  lg:grid lg:grid-cols-2 h-[100vh]">
        <div className="hidden bg-muted lg:block">
          <Image
            src={picture}
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale opacity-90"
          />
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Create Account</h1>
              <p className="text-balance text-muted-foreground">
                Create an account with your email address
              </p>
            </div>
            <div className="grid gap-4">
              <RegisterForm />
            </div>
            <div className="text-center text-sm">
              <Link href="/auth/signin" className="hover:opacity-80">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
