"use client";

import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log(session);
    return session;
  };
  const setSession = async (access_token: string, refresh_token: string) => {
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    console.log(data);
    console.log(error);
    return true;
  };
  const refreshSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.refreshSession();
    console.log(session);
    return session;
  };
  useEffect(() => {
    getSession();
  }, []);
  return <div>Logged in</div>;
}
