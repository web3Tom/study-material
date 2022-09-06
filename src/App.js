import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import HookPractice from './routes/hook-practice/hook-practice.component'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Hooks" element={<HookPractice />} />
      </Route>
    </Routes>
  )
}

export default App
