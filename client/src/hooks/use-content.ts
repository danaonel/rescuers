import { useQuery } from "@tanstack/react-query";
import contentData from "../content.json";
import { type MultiLangContent, type SiteContent, type MultiAppContent } from "@shared/schema";
import { useLocation } from "wouter";

export function useContent() {
  const [location] = useLocation();
  const lang = location.startsWith("/ro") ? "ro" : "en";

  const query = useQuery({
    queryKey: ["content"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/content");
        if (res.ok) {
          return await res.json();
        }
      } catch (e) {
        console.warn("API fetch failed, falling back to bundled content.json");
      }
      
      // Fallback for static build: use bundled content with client-side env-like detection
      const allContent = contentData as MultiAppContent;
      // In Vite, env vars from .env are available via import.meta.env
      const appKey = (import.meta.env.VITE_APP || "ecosave").toLowerCase();
      return allContent[appKey] || allContent["ecosave"];
    },
  });

  return {
    ...query,
    data: query.data ? (query.data[lang] as SiteContent) : undefined,
    lang
  };
}
