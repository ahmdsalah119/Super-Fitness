import type { User } from "../types/auth";

// Token
export function setAuthToken(token: string) {
  localStorage.setItem("authToken", token);
}

export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function removeAuthToken() {
  localStorage.removeItem("authToken");
}

export function isAuthenticated() {
  return getAuthToken() !== null;
}

// User
export function setAuthUser(user: User) {
  localStorage.setItem("authUser", JSON.stringify(user));
}

export function getAuthUser() {
  return JSON.parse(localStorage.getItem("authUser") || "{}");
}

export function removeAuthUser() {
  localStorage.removeItem("authUser");
}
