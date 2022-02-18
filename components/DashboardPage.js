import React from 'react'

const DashboardPage = ({ slug, children }) => {
  return (
    <div>
      <div>{slug}</div>
      {children}
    </div>

  )
}

export default DashboardPage