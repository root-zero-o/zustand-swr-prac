import create from "zustand"
import {devtools} from "zustand/middleware";

const useCounterStore = create(devtools((set) => ({
    count : 0,
    increaseCount : () => set((state) => ({count : state.count + 1})),
    removeCount : () => set({count : 0}),
})))

useCounterStore.subscribe(state => console.log("Something's changed : ", state));
useCounterStore.subscribe(
    state => console.log("Count is changed : ", state.count),
    state => state.count,
)

export default useCounterStore;