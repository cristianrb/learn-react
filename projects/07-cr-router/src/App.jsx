import { Router } from './Router'
import { lazy, Suspense } from 'react'
import './App.css'
import HomePage from './pages/Home'
import SearchPage from './pages/SearchPage'
import { Route } from './pages/Route'

const LazyAboutPage = lazy(() => import('./pages/About'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  },
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  }
]


function App() {

  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={routes}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={LazyAboutPage} />
          </Router>
        </Suspense>

      </main>
    </>
  )
}

export default App
