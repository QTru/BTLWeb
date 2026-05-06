import { useState } from 'react'

/**
 * Hook để quản lý accordion (mở/đóng panel)
 */
export function useAccordion(initialState = {}) {
  const [openPanels, setOpenPanels] = useState(initialState)

  const togglePanel = (id) => {
    setOpenPanels(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const isPanelOpen = (id) => !!openPanels[id]

  return { togglePanel, isPanelOpen }
}
