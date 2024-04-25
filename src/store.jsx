import { create } from 'zustand';

const useStore = create((set) => ({
  theme: 0,
  setTheme: (theme) => set({ theme })
}))

export { useStore };