"use client"

import { useSession } from "next-auth/react";

function UserSegments() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-2 justify-center content-center">
      <div className="flex flex-row gap-2 justify-center content-center p-5">
        {session?.user ? (
          <p className="text-4xl text-white font-bold">for {session.user.name}</p>
        ): (
          <p className="text-4xl text-white font-bold">demo filled data for non signed in users</p>
        )}
      </div>
    </div>
  )
}

export default UserSegments
