import { Navigation } from '../features/layout/components/Navigation'
import { MainContent } from '../features/layout/components/MainContent'

function App () {
  return (
    <div className='bg-[#E5E5DC] dark:bg-[#1a1a1a] min-h-screen'>
      <Navigation />
      <main className='max-w-3xl mx-auto'>
        <MainContent />
      </main>
    </div>
  )
}

export default App
