
import './app.scss'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main title="Notes">
        <Nav>

        </Nav>
          <NotesList>
            <Note date="01.05.2025" title="Note 1 Title"/>
          </NotesList>

      </Main>
    </>
  )
}
