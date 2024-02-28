import { createContext } from 'react'
import { Cycle } from '../pages/Home'

export interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  totalSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextType)
