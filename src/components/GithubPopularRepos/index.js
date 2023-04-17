import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositaryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repositaryData: [],
    languageData: languageFiltersData,
    activeId: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    const {activeId} = this.state
    this.getLanguageData(activeId)
  }

  gitChangeLanguage = id => {
    this.setState({activeId: id, isLoading: true}, this.getLanguageData)
  }

  getLanguageData = async () => {
    const {activeId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeId}`,
    )
    console.log(response)
    const data = await response.json()

    const popularRepos = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    this.setState({repositaryData: popularRepos, isLoading: false})
  }

  render() {
    const {activeId, languageData, isLoading, repositaryData} = this.state
    return (
      <div className="app-container">
        <div className="github-container">
          <h1 className="heading">Popular</h1>
          <ul className="language-list">
            {languageData.map(each => (
              <LanguageFilterItem
                id={each.id}
                language={each.language}
                activeId={activeId}
                key={each.id}
                gitChangeLanguage={this.gitChangeLanguage}
              />
            ))}
          </ul>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            <div className="repositary-container">
              <ul className="repositary-list">
                {repositaryData.map(eachRepositary => (
                  <RepositaryItem
                    eachRepositary={eachRepositary}
                    key={eachRepositary.id}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
