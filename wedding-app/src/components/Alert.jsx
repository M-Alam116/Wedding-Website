
import React from 'react'
import Alert from '../components/Alert'

function AlertApp() {
  return (
    <div>
      <Alert text={"Successfully login"} className={"success"}/>
      <Alert text={"Time Triggered"} delay={true} delayTime={3000} className={"time"}/>
    </div>
  )
}

export default AlertApp