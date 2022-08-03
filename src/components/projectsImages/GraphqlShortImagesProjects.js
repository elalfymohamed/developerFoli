// Gatsby
import { graphql, useStaticQuery } from "gatsby"

// short images projects

export const GraphqlShortImagesProjects = () => {
  const query = graphql`
    query {
      amazon: file(relativePath: { eq: "projects/short/amazon.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      cart: file(relativePath: { eq: "projects/short/cart.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      document: file(relativePath: { eq: "projects/short/document.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Gams: file(relativePath: { eq: "projects/short/Gams-Store.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      hulu: file(relativePath: { eq: "projects/short/hulu-next.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Movies: file(relativePath: { eq: "projects/short/Movies-App.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      MovieWatchlist: file(
        relativePath: { eq: "projects/short/MovieWatchlist.jpeg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Por: file(relativePath: { eq: "projects/short/Por.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Shopping: file(
        relativePath: { eq: "projects/short/React-Shopping.jpeg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      redux: file(relativePath: { eq: "projects/short/redux-api.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      REPAIR: file(relativePath: { eq: "projects/short/REPAIR-DESIGN.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      LIST: file(relativePath: { eq: "projects/short/TODO-LIST.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `

  const data = useStaticQuery(query)

  const items = [
    {
      name: data.amazon.name,
      image: data.amazon,
    },
    {
      name: data.cart.name,
      image: data.cart,
    },
    {
      name: data.hulu.name,
      image: data.hulu,
    },
    {
      name: data.Movies.name,
      image: data.Movies,
    },
    {
      name: data.MovieWatchlist.name,
      image: data.MovieWatchlist,
    },
    {
      name: data.Gams.name,
      image: data.Gams,
    },
    {
      name: data.Shopping.name,
      image: data.Shopping,
    },
    {
      name: data.redux.name,
      image: data.redux,
    },
    {
      name: data.REPAIR.name,
      image: data.REPAIR,
    },
    {
      name: data.LIST.name,
      image: data.LIST,
    },
    {
      name: data.Por.name,
      image: data.Por,
    },
    {
      name: data.document.name,
      image: data.document,
    },
  ]

  return items
}
