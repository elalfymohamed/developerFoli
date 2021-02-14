import './src/style/_main.scss'


export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}

