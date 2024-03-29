import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";

const middleware = (req, res) => {
  if (
    req.nextUrl.pathname.startsWith("/api") ||
    req.nextUrl.pathname.startsWith("/upload") ||
    req.nextUrl.pathname.startsWith("/brandLogos") ||
    req.nextUrl.pathname.startsWith("/site") ||
    req.nextUrl.pathname.startsWith("/en") ||
    req.nextUrl.pathname.startsWith("/service-worker.cjs") ||
    req.nextUrl.pathname.startsWith("/icons")
  ) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/")) {
    // Existing logic to determine the language
    let lng;
    if (req.cookies.has(cookieName))
      lng = acceptLanguage.get(req.cookies.get(cookieName).value);
    if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
    if (!lng) lng = fallbackLng;

    // Original logic for language redirection
    if (
      !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
      !req.nextUrl.pathname.startsWith("/_next")
    ) {
      return NextResponse.redirect(
        new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
      );
    }

    if (req.headers.has("referer")) {
      const refererUrl = new URL(req.headers.get("referer"));
      const lngInReferer = languages.find((l) =>
        refererUrl.pathname.startsWith(`/${l}`)
      );
      const response = NextResponse.next();
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return response;
    }

    return NextResponse.next();
  }
};

export default middleware;
