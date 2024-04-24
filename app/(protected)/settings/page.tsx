import { auth, signOut } from "@/auth";

import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className="h-[100vh] pt-[6.5rem] ">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
        {/* button doesnt refresh the page so the url is wrong */}
      </form>
    </div>
  );
};

export default SettingsPage;
