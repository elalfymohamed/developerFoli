const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tabletS: "550px",
  tablet: "768px",
  tabletM: "992px",
  laptop: "1024px",
  laptopM: "1382px",
  laptopL: "1440px",
  desktop: "2560px",
}
export const Device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tabletM})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}
