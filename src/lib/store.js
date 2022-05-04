import { writable } from "svelte/store";

export const correo = writable("");

export const isLoadingEmail = writable(false);

export const status = writable({
  downloadError: false,
  invalidEmail: false,
  loadingEmail: false,
});
