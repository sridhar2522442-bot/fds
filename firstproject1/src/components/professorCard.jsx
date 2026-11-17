import './professorCard.css'

function ProfessorCard({ name, department, email }) {
  return (
    <article className="professor-card">
      <div className="professor-mark" aria-hidden="true">{name.slice(-1)}</div>
      <p className="professor-label">FACULTY</p>
      <h2>Professors</h2>
      <p className="professor-name">{name}</p>
      <p className="professor-department">{department}</p>
      <a className="professor-email" href={`mailto:${email}`}>{email}</a>
    </article>
  )
}

export default ProfessorCard
