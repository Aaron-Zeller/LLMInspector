import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const isLocalBrowser =
  typeof window !== 'undefined' &&
  ['localhost', '127.0.0.1'].includes(window.location.hostname);

const defaultShowSegmentIds =
  import.meta.env.VITE_SHOW_SEGMENT_IDS === 'true' || import.meta.env.DEV || isLocalBrowser;

export const showDeveloperTools =
  import.meta.env.DEV ||
  import.meta.env.VITE_ENABLE_SEGMENT_PANEL === 'true' ||
  import.meta.env.VITE_SHOW_SEGMENT_IDS === 'true' ||
  isLocalBrowser;

export const useDevStore = create(
  persist(
    (set) => ({
      showSegmentIds: defaultShowSegmentIds,
      simulateCompletedFlow: false,
      toggleSegmentIds() {
        set((state) => ({ showSegmentIds: !state.showSegmentIds }));
      },
      toggleSimulateCompletedFlow() {
        set((state) => ({ simulateCompletedFlow: !state.simulateCompletedFlow }));
      },
      setSegmentIdsVisible(value) {
        set({ showSegmentIds: value });
      },
      setSimulateCompletedFlow(value) {
        set({ simulateCompletedFlow: value });
      },
    }),
    {
      name: 'colorcode-dev-flags',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
