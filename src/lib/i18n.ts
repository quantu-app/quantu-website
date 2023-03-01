import { browser } from '$app/environment'
import { init, addMessages } from 'svelte-i18n'
import en from "../locales/en.json";

export const acceptedLocales = ["en"];
export const defaultLocale = "en";

addMessages("en", en);

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
})