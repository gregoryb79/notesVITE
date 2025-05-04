
import './app.scss'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { Note } from './components/Note'
import { NotesList } from './components/NotesList'

export function App() {
    return (
    <>
      <Main title="Notes" nav={<Nav username="Gregory"/>}>               
        <NotesList>
          <Note date="01.05.2025" title="Note 1 Title"/>
          <Note date="01.05.2025" title="Note 2 Title"/>
          <Note date="01.05.2025" title="Note 3 Title"/>
          <Note date="01.05.2025" title="Note 4 Title"/>
          <Note date="01.05.2025" title="Note 5 Title"/>
          <Note date="01.05.2025" title="Note 6 Title"/>
          <Note date="01.05.2025" title="Note 7 Title"/>
        </NotesList>

      </Main>
    </>
  )
}

export default App