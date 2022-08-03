// Gatsby Link
import React, { useState } from "react"
// PropTypes
import PropTypes from "prop-types"

import { Link } from "gatsby"

import styled from "@emotion/styled"

// Data
import data from "../../data/infoProjects.json"

import { ShortImages } from "../projectsImages/ShortImages"

const ProjectItem = () => {
  const [getItem, setGetItem] = useState(4)
  return (
    <>
      <Content>
        {data.slice(0, getItem).map(list => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            src={list.src}
            number={list.number}
            column={list.column}
          />
        ))}
      </Content>
      {getItem === 12 ? null : (
        <ButtonMore>
          <Button
            type="button"
            role="more"
            onClick={() => setGetItem(c => c + 4)}
          >
            more
          </Button>
        </ButtonMore>
      )}
    </>
  )
}

const List = ({ title, src, number, column, id }) => {
  return (
    <>
      <ProjectItems row={number} column={column}>
        <ProjectBody>
          <Link to={`/product/${id}`}>
            <ProjectImage>
              <ShortImages src={src} />
            </ProjectImage>
          </Link>
          <ProjectNumber>{number}</ProjectNumber>
          <ProjectTitle>
            <Title>{title}</Title>
          </ProjectTitle>
        </ProjectBody>
      </ProjectItems>
    </>
  )
}

export default ProjectItem

List.propTypes = {
  title: PropTypes.string,
  src: PropTypes.number,
  number: PropTypes.number,
  column: PropTypes.string,
  id: PropTypes.string,
}

const Content = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.5em 0;
  }
`

const ProjectItems = styled.article`
  border-radius: 10px;
  margin-bottom: 55px;
  position: relative;
  @media screen and (min-width: 768px) {
    grid-column: ${props => props.column && `${props.column}`};
    grid-row: ${props => props.row && `${props.row}`};
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 0 1px 1.8px rgba(0, 0, 0, 0.024),
      0 2.8px 5px rgba(0, 0, 0, 0.035), 0 6.6px 12.1px rgba(0, 0, 0, 0.046),
      0 22px 40px rgba(0, 0, 0, 0.07);
  }
`

const ProjectBody = styled.div`
  position: relative;
  text-align: center;
`
const ProjectImage = styled.div`
  max-width: 72rem;
`

const ProjectNumber = styled.div`
  position: absolute;
  top: 0%;
  left: -3.5rem;
  font-size: 15rem;
  color: #ffbd009c;
  font-family: "Bangers", cursive;
  @media screen and (max-width: 1367px) {
    font-size: 10rem;
    left: -2.5rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 8rem;
    left: -1.8rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 5rem;
    left: -0.5rem;
  }
`
const ProjectTitle = styled.div`
  position: absolute;
  top: 83%;
  left: 0;
  right: 0;
  width: auto;
  @media screen and (max-width: 1367px) {
    top: 86%;
  }
`
const Title = styled.h4`
  font-size: 6rem;
  color: #ffbd009c;
  text-transform: capitalize;
  font-family: "Bangers", cursive;
  margin: 0;
  @media screen and (max-width: 1367px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 426px) {
    font-size: 2rem;
  }
`

const ButtonMore = styled.div`
  text-align: center;
  margin: 50px auto;
  @media screen and (max-width: 425px) {
    margin: 20px auto;
  }
`

const Button = styled.button`
  background: #000;
  padding: 10px 25px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: "Bangers", cursive;
  font-style: normal;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }

  @media screen and (max-width: 425px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`
