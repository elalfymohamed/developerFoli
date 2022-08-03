import React, { useContext } from "react"
// Gatsby
import { useStaticQuery, graphql } from "gatsby"

import { GlobalContext } from "../store/GlobalStateProvider"

const Repo = () => {
  // Theme
  const { state } = useContext(GlobalContext)

  const openRepoInNewTab = url => {
    let win = window.open(url, "_blank")
    win.focus()
  }
  // Get Repo With Graphql
  const RepoData = useStaticQuery(query)
  const data = RepoData.github.viewer.pinnableItems.nodes

  return (
    <>
      {data.map(repository => {
        return (
          <article
            className="repo-container animate___"
            key={repository.id}
            aria-hidden="true"
            onClick={() => openRepoInNewTab(repository.url)}
            title={`Go To Repo ${repository.name}`}
          >
            <div
              className="line-card-mode repo-div"
              style={{ background: state.isDark && "#00000036" }}
            >
              <div className="repo-name-div">
                <svg
                  aria-hidden="true"
                  className="repo-svg"
                  height="20"
                  role="img"
                  viewBox="0 0 12 16"
                  width="14"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  ></path>
                </svg>
                <p
                  className={
                    state.isDark
                      ? "repo-name dark_mode"
                      : "repo-name light_mode"
                  }
                >
                  {repository.name}
                </p>
              </div>
              <p
                className={
                  state.isDark
                    ? "repo-description dark_mode"
                    : "repo-description light_mode"
                }
              >
                {repository.description}
              </p>
              <div className="repo-stats">
                <div className="repo-left-stat">
                  <span>
                    <div
                      className={`language-color `}
                      style={{ background: repository.primaryLanguage.color }}
                    ></div>
                    <p style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}>
                      {repository.primaryLanguage.name}
                    </p>
                  </span>
                  <span>
                    <svg
                      aria-hidden="true"
                      className="repo-star-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 10 16"
                      width="12"
                      fill="rgb(106, 115, 125)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                      ></path>
                    </svg>
                    <p style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}>
                      {repository.forkCount}
                    </p>
                  </span>
                  <span>
                    <svg
                      aria-hidden="true"
                      className="repo-star-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 14 16"
                      width="14"
                      fill="rgb(106, 115, 125)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                      ></path>
                    </svg>
                    <p style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}>
                      {repository.stargazerCount}
                    </p>
                  </span>
                </div>
                <div className="repo-right-stat">
                  <p style={{ color: state.isDark ? "#f6f6f6" : "#16141a" }}>
                    {repository.languages.totalSize} KB
                  </p>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Repo

export const query = graphql`
  {
    github {
      viewer {
        pinnableItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on GitHub_Repository {
              id
              name
              url
              description
              stargazerCount
              forkCount
              primaryLanguage {
                color
                name
              }
              languages {
                totalSize
              }
            }
          }
        }
      }
    }
  }
`
