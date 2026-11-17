import { useState } from 'react'
import './profileCard.css'

function ProfileCard() {
  const [profile, setProfile] = useState({
    name: 'sridhar',
    age: '20',
    major: 'Computer Science',
  })
  const [isEditing, setIsEditing] = useState(false)

  function saveProfile(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setProfile({
      name: formData.get('name').trim(),
      age: formData.get('age').trim(),
      major: formData.get('major').trim(),
    })
    setIsEditing(false)
  }

  function deleteProfile() {
    setProfile(null)
    setIsEditing(false)
  }

  function restoreProfile() {
    setProfile({ name: 'sridhar', age: '20', major: 'Computer Science' })
  }

  return (
    <section className="profile-card" id="profile" aria-labelledby="profile-title">
      <div className="profile-information">
        <p className="eyebrow">YOUR ACCOUNT</p>
        <h2 id="profile-title">Student Profile</h2>
        {isEditing && profile ? (
          <form className="profile-form" onSubmit={saveProfile}>
            <label>
              Name
              <input name="name" defaultValue={profile.name} required />
            </label>
            <label>
              Age
              <input name="age" type="number" min="1" defaultValue={profile.age} required />
            </label>
            <label>
              Major
              <input name="major" defaultValue={profile.major} required />
            </label>
            <div className="form-actions">
              <button type="submit" className="save-button">Save changes</button>
              <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : profile ? (
          <div className="profile-details">
            <p><span>Name</span>{profile.name}</p>
            <p><span>Age</span>{profile.age}</p>
            <p><span>Major</span>{profile.major}</p>
          </div>
        ) : (
          <p className="profile-deleted">This student profile has been deleted.</p>
        )}
      </div>
      <div className="profile-actions">
        {profile ? (
          <>
            <button type="button" className="edit-button" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Stop editing' : 'Edit profile'}
            </button>
            <button type="button" className="delete-button" onClick={deleteProfile}>
              Delete profile
            </button>
          </>
        ) : (
          <button type="button" className="edit-button" onClick={restoreProfile}>
            Restore profile
          </button>
        )}
      </div>
    </section>
  )
}

export default ProfileCard
