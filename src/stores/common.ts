import { create } from "zustand";

interface Common {
  theme: string;
  setTheme: (theme: string) => void;
  focusedWindow: WindowType | null;
  setFocusedWindow: (window: WindowType) => void;
}

const useCommonStore = create<Common>((set) => ({
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
