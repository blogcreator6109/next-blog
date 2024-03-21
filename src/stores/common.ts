import { create } from "zustand";

const useCommonStore = create((set) => ({
  // Theme
  theme: "light" as string,
  setTheme: (theme: string) => set({ theme }),

  // Window
  focusedWindow: null as WindowType | null,
  setFocusedWindow: (window: WindowType) => {
    set(() => ({ focusedWindow: window }));
  },
}));

export default useCommonStore;
