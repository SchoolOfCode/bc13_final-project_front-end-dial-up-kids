import { Switch } from "@nextui-org/react";

export default function DarkModeToggle() {
  // Change the icons inside the button based on previous settings

  function DarkModeFunctionality() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light'
      
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark'

      
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
  }  

  return (
    <Switch
      onClick={DarkModeFunctionality}
      id="theme-toggle"
      className="text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    />
  );
}
