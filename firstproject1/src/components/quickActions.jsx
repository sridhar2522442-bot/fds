import { useState } from 'react'
import './quickActions.css'

function QuickActions() {
  const [activeDetail, setActiveDetail] = useState('')

  function toggleDetail(action) {
    setActiveDetail(activeDetail === action ? '' : action)
  }

  return (
    <section className="shortcuts" aria-label="Student shortcuts">
      <div className="shortcut-buttons">
        <button
          type="button"
          aria-pressed={activeDetail === 'attendance'}
          onClick={() => toggleDetail('attendance')}
        >
          Attendance
        </button>
        <button
          type="button"
          aria-pressed={activeDetail === 'schedule'}
          onClick={() => toggleDetail('schedule')}
        >
          Schedule
        </button>
        <button
          type="button"
          aria-pressed={activeDetail === 'fees'}
          onClick={() => toggleDetail('fees')}
        >
          Pay fees
        </button>
      </div>
      {activeDetail && (
        <p className="shortcut-detail" role="status">
          {activeDetail === 'attendance' && 'Your attendance is up to date at 92%.'}
          {activeDetail === 'schedule' && 'Your next class is Computer Science at 10:00 AM.'}
          {activeDetail === 'fees' && 'Your semester fee payment is ready to review.'}
        </p>
      )}
    </section>
  )
}

export default QuickActions
