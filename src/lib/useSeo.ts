import { useEffect } from "react";

export const SITE_URL = "https://yussuf.lenzro.com";

interface Seo {
  title: string;
  description: string;
  /** Absolute path on this site, e.g. "/work/nidaampos". */
  path: string;
  /** Absolute path to a social image; falls back to the site default. */
  image?: string;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Keeps title, description, canonical and the social cards in step with the
 * active route. Note this runs in the browser: search engines that execute JS
 * will see it, but social scrapers read the static HTML, so per-route cards
 * only land once the site is prerendered.
 */
export function useSeo({ title, description, path, image }: Seo) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imageUrl = `${SITE_URL}${image ?? "/profile.jpg"}`;

    document.title = title;
    setCanonical(url);
    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image]);
}
