import { Play } from 'phosphor-react'
import {
  StartCountdownButton,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Homepage() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Will work on</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Give a name to your project"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="React" />
            <option value="Next.js" />
            <option value="Gatsby" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
