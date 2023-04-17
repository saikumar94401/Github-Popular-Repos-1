import './index.css'

const LanguageFilterItem = props => {
  const {id, activeId, language, gitChangeLanguage} = props
  const selectId = activeId === id ? 'select-lang' : ''

  const changeLanguage = () => {
    gitChangeLanguage(id)
  }

  return (
    <li className="li">
      <button
        className={`language-button ${selectId}`}
        type="button"
        onClick={changeLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
