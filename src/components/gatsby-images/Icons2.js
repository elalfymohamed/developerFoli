import React from "react"
// React Svg
import react from "../../assets/skills/React.svg"
// redux Svg
import redux from "../../assets/skills/redux.svg"
// JavaScript Svg
import js from "../../assets/skills/javascript.svg"
// Html Svg
import html from "../../assets/skills/html5.svg"
// Pug Svg
import pug from "../../assets/skills/pugjs.svg"
// Sass Svg
import sass from "../../assets/skills/sass.svg"
// Webpack Svg
import webpack from "../../assets/skills/webpack.svg"
// Gulp Svg
import gulp from "../../assets/skills/gulp.svg"

//

export const Icons2 = ({ icon }) => {
  return (
    <>
      {icon === 1 ? (
        <ul>
          <li>
            <img src={react} alt="icon-react" />
          </li>
          <li>
            <img src={sass} alt="icon-sass" />
          </li>
          <li>
            <img src={webpack} alt="icon-webpack" />
          </li>
        </ul>
      ) : icon === 2 ? (
        <ul>
          <li>
            <img src={react} alt="icon-react" />
          </li>

          <li>
            <img src={redux} alt="icon-redux" />
          </li>
          <li>
            <img src={sass} alt="icon-sass" />
          </li>
        </ul>
      ) : icon === 3 ? (
        <ul>
          <li>
            <img src={js} alt="icon-js" />
          </li>
          <li>
            <img src={gulp} alt="icon-gulp" />
          </li>
          <li>
            <img src={pug} alt="icon-pug" />
          </li>
          <li>
            <img src={sass} alt="icon-sass" />
          </li>
        </ul>
      ) : icon === 4 ? (
        <ul>
          <li>
            <img src={js} alt="icon-js" />
          </li>

          <li>
            <img src={html} alt="icon-html" />
          </li>

          <li>
            <img src={sass} alt="icon-sass" />
          </li>
        </ul>
      ) : (
                <ul>
                  <li>
                    <img src={html} alt="icon-html" />
                  </li>

                  <li>
                    <img src={sass} alt="icon-sass" />
                  </li>
                </ul>
              )}
    </>
  )
}
