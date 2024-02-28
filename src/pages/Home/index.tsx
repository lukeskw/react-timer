import { Play, X } from 'phosphor-react'
import {
  StartCountdownButton,
  HomeContainer,
  StopCountdownButton,
} from './styles'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Please, provide a task'),
  minutesAmount: z
    .number()
    .min(5, 'Cycle must not be less than 5 minutes')
    .max(60, 'Cycle must not exceed 60 minutes'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Homepage() {
  const { activeCycle, createNewCycle, stopCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { reset, watch, handleSubmit, formState } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')

  const isSubmitDisabled = !task

  console.log(formState.errors) // TODO: add sonner to display messages

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={stopCurrentCycle}>
            <X size={24} />
            Stop
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
