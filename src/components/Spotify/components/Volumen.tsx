import styled from 'styled-components'
import { changeVolume } from '../../../helper/changeVolume'
import { useContextReducer } from '../../../hooks/useContextReducer'

export const Volumen = () => {

    const {state, dispatch} = useContextReducer()

  return (
      <Container>
          <input type="range" min={0} max={100} onMouseUp={(e => changeVolume(e, state, dispatch))} />
      </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    input {
        width: 15rem;
        border-radius: 2rem;
        height: 0.5rem;
    }
`
