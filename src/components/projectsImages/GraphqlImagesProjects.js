// Gatsby
import { graphql, useStaticQuery } from "gatsby"

//  images projects

export const GraphqlImagesProjects = () => {
  const query = graphql`
    query {
      amazon: file(relativePath: { eq: "projects/amazon.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      cart: file(relativePath: { eq: "projects/cart.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      document: file(relativePath: { eq: "projects/document.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Gams: file(relativePath: { eq: "projects/Gams-Store.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      hulu: file(relativePath: { eq: "projects/hulu-next.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Movies: file(relativePath: { eq: "projects/MoviesApp.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      MovieWatchlist: file(
        relativePath: { eq: "projects/MovieWatchlist.jpeg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Por: file(relativePath: { eq: "projects/Profile-Project.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Shopping: file(relativePath: { eq: "projects/ReactShopping.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      redux: file(relativePath: { eq: "projects/redux-api.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      REPAIR: file(relativePath: { eq: "projects/repairdesignic.png" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      LIST: file(relativePath: { eq: "projects/TODO-LIST.jpeg" }) {
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
