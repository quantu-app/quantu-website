import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";
import { locale, waitLocale} from "svelte-i18n";
import { acceptedLocales } from "$lib/i18n";

// render entire app on the client
export const ssr = false;

export const load: LayoutLoad = async () => {
  if (browser) {
    const queryLocale = new URLSearchParams(window.location.search).get("locale")
    if (queryLocale && acceptedLocales.includes(queryLocale)) {
      locale.set(queryLocale);
    } else {
      locale.set(window.navigator.language);
    }
  }
  await waitLocale();
}