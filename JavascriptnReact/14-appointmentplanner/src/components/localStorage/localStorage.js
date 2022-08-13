import { useState, useEffect } from "react";

// Get Storage Value
const getStorageValue = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : "";
};
// Set Storage Value
const setStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// Remove Storage Value
const removeStorageValue = (key) => {
  localStorage.removeItem(key);
};
// Clear Storage Value
const clearStorageValue = () => {
  localStorage.clear();
};
// Use Local Storage
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(getStorageValue(key) || initialValue);
  useEffect(() => {
    setStorageValue(key, value);
  }, [key, value]);
  return [value, setValue];
};
