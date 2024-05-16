import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
	count: 0,
	upCount: () =>
		set((state) => ({
			count: state.count + 1,
		})),
	downCount: () =>
		set((state) => ({
			count: state.count - 1,
		})),
	resetCount: () =>
		set({
			count: 0,
		}),
});

const useStore = create(devtools(store));

export default useStore;
