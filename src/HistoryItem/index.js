import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="history-time">{timeAccessed}</p>
      <div className="domain-details">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete-image"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      />
    </li>
  )
}

export default HistoryItem
