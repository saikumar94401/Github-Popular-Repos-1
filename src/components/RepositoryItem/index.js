import './index.css'

const RepositaryItem = props => {
  const {eachRepositary} = props

  const {name, avatarUrl, starsCount, forksCount, issuesCount} = eachRepositary

  return (
    <li className="repository-element">
      <img src={avatarUrl} className="avatar-url" alt={name} />
      <h1 className="repository-heading">{name}</h1>
      <div className="emoji-count-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="emoji-image"
        />
        <p className="emoji-count">{starsCount}</p>
        <p className="emoji-content">Stars</p>
      </div>

      <div className="emoji-count-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="emoji-image"
        />
        <p className="emoji-count">{forksCount}</p>
        <p className="emoji-content">forks</p>
      </div>
      <div className="emoji-count-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="emoji-image"
        />
        <p className="emoji-count">{issuesCount}</p>
        <p className="emoji-content">open Issues</p>
      </div>
    </li>
  )
}
export default RepositaryItem
