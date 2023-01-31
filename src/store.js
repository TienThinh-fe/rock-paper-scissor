import { create } from "zustand";

const useStore = create((set) => ({
  score: 0,
  setScore: (score) => set({ score }),

  userPick: "",
  setUserPick: (userPick) => set({ userPick }),

  isPicked: false,
  setIsPicked: (isPicked) => set({ isPicked }),
}));

export default useStore;
