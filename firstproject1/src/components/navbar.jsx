import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#profile">About</a>
      <a href="#professors">Professors</a>
      <a href="mailto:support@university.edu">Contact</a>
    </nav>
  )
}

export default Navbar
