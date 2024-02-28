import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  console.log(cycles)
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React</td>
              <td>5 minutes</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="yellow">Ongoing</Status>
              </td>
            </tr>
            <tr>
              <td>Next.js</td>
              <td>5 minutes</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="red">Suspended</Status>
              </td>
            </tr>
            <tr>
              <td>Gatsby</td>
              <td>5 minutes</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>5 minutes</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="red">Suspended</Status>
              </td>
            </tr>
            <tr>
              <td>Nest</td>
              <td>5 minutes</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="red">Suspended</Status>
              </td>
            </tr>
            <tr>
              <td>Laravel</td>
              <td>5 minutes</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="yellow">Ongoing</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
