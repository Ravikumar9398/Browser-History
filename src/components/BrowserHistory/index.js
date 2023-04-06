import './index.css'

const BrowserHistory = props => {
  const {userDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history_container">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="website_logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div>
        <button type="button" className="btn" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
