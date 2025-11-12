const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={isError ? 'notify error' : 'notify' }>
      {message}
    </div>
  )
}

export default Notification