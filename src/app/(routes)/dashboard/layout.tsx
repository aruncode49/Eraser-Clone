"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideBar from "@/components/dashboard/SideBar";
import { TEAM } from "@/lib/types";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const [team, setTeam] = useState<TEAM[]>();

  async function getTeam() {
    try {
      const res = await axios.post("/api/team/get", { createdBy: user?.email });
      if (!res?.data?.success) {
        router.push("/team/create");
      } else {
        if (res?.data?.team && res?.data?.team?.length)
          setTeam(res?.data?.team);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
    }
  }

  useEffect(() => {
    if (user) getTeam();
  }, [user]);

  return (
    <div className="bg-black/90 min-h-screen text-white flex">
      <div className="w-[280px] border-r border-r-zinc-700 h-screen fixed">
        <SideBar team={team!} />
      </div>
      <div className="ml-[280px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
