import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const useArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const getArticles = async () => {
    const { data, error } = await supabase.from("articles").select("*"); //RLS Policies

    if (data) {
      setArticles(data);
    } else {
      console.log(error);
    }
  };

 

  return {
    articles,
    getArticles
  };
};
