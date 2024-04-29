import { create } from 'zustand';

const useStore = create((set) => ({
  token: null,
  userId: null,
  theme: 0,
  setToken: (token) => set({ token }),
  setUserId: (userId) => set({ userId }),
  setTheme: (theme) => set({ theme }),
}))

export { useStore };