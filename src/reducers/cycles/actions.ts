import { Cycle } from '../../@types/cycles'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  STOP_CURRENT_CYCLE = 'STOP_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

// Define action interfaces
interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface MarkCurrentCycleAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface StopCurrentCycleAction {
  type: ActionTypes.STOP_CURRENT_CYCLE
}

// Union of all action types
export type Action =
  | AddNewCycleAction
  | MarkCurrentCycleAsFinishedAction
  | StopCurrentCycleAction

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  }
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedAction {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function stopCurrentCycleAction(): StopCurrentCycleAction {
  return {
    type: ActionTypes.STOP_CURRENT_CYCLE,
  }
}
