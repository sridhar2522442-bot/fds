import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import QuickActions from './components/quickActions.jsx'
import ProfileCard from './components/profileCard.jsx'
import ProfessorCard from './components/professorCard.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell" id="home">
      <Navbar />
      <main className="dashboard">
        <Header />
        <QuickActions />
        <ProfileCard />

        <section className="professors-section" id="professors" aria-label="Professors">
          <ProfessorCard
            name="Professor 1"
            department="Computer Science"
            email="professor1@university.edu"
          />
          <ProfessorCard
            name="Professor 2"
            department="Mathematics"
            email="professor2@university.edu"
          />
          <ProfessorCard
            name="Professor 3"
            department="Physics"
            email="professor3@university.edu"
          />
        </section>
      </main>
    </div>
  )
}

export default App
