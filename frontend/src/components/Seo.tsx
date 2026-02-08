import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  imagePath?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const DEFAULT_TITLE = "EFICORP-PCGerente | Servicios Contables en Ecuador";
const DEFAULT_DESCRIPTION =
  "Servicios contables, tributarios y laborales en Ecuador. Gestionamos SRI, IESS, Ministerio del Trabajo, GAD y Superintendencia. PC-Gerente con soporte humano y cumplimiento garantizado.";
const DEFAULT_KEYWORDS =
  "servicios contables Ecuador, asesoría tributaria, SRI, IESS, Ministerio del Trabajo, GAD, Superintendencia de Compañías, PC-Gerente, software contable, cumplimiento legal, contabilidad Quito";
const DEFAULT_IMAGE = "/images/us.jpg";

export function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  imagePath = DEFAULT_IMAGE,
  noIndex = false,
  structuredData,
}: SeoProps) {
  const { pathname } = useLocation();
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = origin ? `${origin}${pathname === "/" ? "" : pathname}` : "";
  const image = imagePath.startsWith("http")
    ? imagePath
    : origin
      ? `${origin}${imagePath}`
      : imagePath;
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  useEffect(() => {
    if (typeof document === "undefined") return;

    const head = document.head;
    const created: HTMLElement[] = [];

    const upsertMeta = (attr: "name" | "property", key: string, contentValue: string) => {
      if (!contentValue) return;
      const selector = `meta[${attr}="${key}"][data-seo="true"]`;
      let meta = head.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        meta.setAttribute("data-seo", "true");
        head.appendChild(meta);
        created.push(meta);
      }
      meta.setAttribute("content", contentValue);
    };

    const upsertLink = (rel: string, hrefValue: string, extra?: Record<string, string>) => {
      if (!hrefValue) return;
      const selector = `link[rel="${rel}"][data-seo="true"]`;
      let link = head.querySelector(selector) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        link.setAttribute("data-seo", "true");
        head.appendChild(link);
        created.push(link);
      }
      link.setAttribute("href", hrefValue);
      if (extra) {
        Object.entries(extra).forEach(([key, value]) => link?.setAttribute(key, value));
      }
    };

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", robots);

    if (canonical) {
      upsertLink("canonical", canonical);
      upsertLink("alternate", canonical, { hreflang: "es-EC" });
    }

    upsertMeta("property", "og:site_name", "EFICORP-PCGerente");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:locale", "es_EC");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    if (structuredData) {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo", "true");
      script.textContent = JSON.stringify(structuredData);
      head.appendChild(script);
      created.push(script);
    }

    return () => {
      created.forEach((node) => node.remove());
    };
  }, [canonical, description, image, keywords, robots, structuredData, title]);

  return null;
}
