"use client";

import { useClerk } from "@clerk/nextjs";
import Image from "next/image";

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    // Clicking on this button will sign out a user
    // and reroute them to the "/" (home) page.
    <button onClick={() => signOut({ redirectUrl: "/sign-in" })}>
      <div className="flex cursor-pointer gap-4 p-4">
        <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />

        <p className="text-light-2 max-lg:hidden">Logout</p>
      </div>
    </button>
  );
};
