import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/global'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: hsla(0, 0%, 100%, 0.96);
`

const ButtonContainer = styled.div`
  position: fixed;
  z-index: 9;
  top: 50%;
  left: 0;
  margin: 0;
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.filterBar};
  box-shadow: ${props => props.theme.boxShadow.default};
  transform: rotate(270deg);
  transform-origin: 20px;
  margin: 0;
  padding: 12px;
  color: ${props => props.theme.colors.accent};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

const lightTheme = {
  colors: {
    body: '#383740', // Black
    primary: '#605DEE',
    accent: '#605DEE', // Purple
    secondary: '#44BEA4', // Green
    highlight: '#8FFBE4', // highlighter green
    green: '#C1DEE2',
    gray100: '#F4F4F4',
    gray150: '#edecf2',
    gray200: '#D8D8DB',
    gray300: '#C0BEC9',
    gray400: '#ABAAB6',
    gray500: '#8E8C9A',
    gray600: '#6F6E7B',
    gray700: '#53515C',
    gray800: '#383740',
    gray900: '#1E1D2B',
    mainBackground: '#605DEE',
    tertiaryBackground: '#FAFAFA',
    heroText: '#FFF',
    filterBar: '#fff',
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  fonts: {
    display:
      "Object Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    secondary:
      "Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
  },
  boxShadow: {
    default:
      '0 16px 16px rgba(103, 110, 144, 0.05), 0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05), 0 2px 2px rgba(103, 110, 144, 0.05)',
    filterBar:
      '0 16px 16px rgba(103, 110, 144, 0.05), 0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05), 0 2px 2px rgba(103, 110, 144, 0.05)',
  },
}

const darkTheme = {
  colors: {
    body: '#8FFBE4',
    primary: '#1E1D2B', // Purple
    secondary: '#44BEA4',
    accent: '#8FFBE4', // Green
    highlight: '#9B98FF', // highlighter green
    green: '#C1DEE2',
    gray100: '#F4F4F4',
    gray150: '#edecf2',
    gray200: '#D8D8DB',
    gray300: '#C0BEC9',
    gray400: '#ABAAB6',
    gray500: '#8E8C9A',
    gray600: '#6F6E7B',
    gray700: '#53515C',
    gray800: '#383740',
    gray900: '#1E1D2B',
    mainBackground: '#252A33',
    secondaryBackground: '#383740',
    tertiaryBackground: '#1E1D2B',
    heroText: '#8FFBE4',
    filterBar: '#383740',
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  fonts: {
    display:
      "Object Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    secondary:
      "Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
  },
  boxShadow: {
    default:
      '0 12px 12px rgba(103, 110, 144, 0.15), 0 8px 8px rgba(103, 110, 144, 0.15), 0 4px 4px rgba(103, 110, 144, 0.15), 0 2px 2px rgba(103, 110, 144, 0.15)',
    filterBar:
      '0 16px 16px rgba(143, 251, 228, 0.6), 0 8px 8px rgba(143, 251, 228, 0.6), 0 4px 4px rgba(143, 251, 228, 0.6), 0 2px 2px rgba(143, 251, 228, 0.6)',
  },
}

class Template extends Component {
  state = {
    isLight: true,
    theme: lightTheme,
    title: 'Dark Theme',
  }

  componentDidMount() {}

  handleClick = () => {
    const isLight = !this.state.isLight

    this.setState({
      isLight: isLight,
      theme: isLight ? lightTheme : darkTheme,
      title: isLight ? 'Dark Theme' : 'Light Theme',
    })
  }

  render() {
    return (
      <div className="siteRoot">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" />
        </Helmet>

        <ThemeProvider theme={this.state.theme}>
          <ModalProvider backgroundComponent={SpecialModalBackground}>
            <>
              <ButtonContainer>
                <Button onClick={this.handleClick}>{this.state.title}</Button>
              </ButtonContainer>
              <Hero isLight={this.state.isLight} />
              <div className="siteContent">{this.props.children}</div>
              <Footer isLight={this.state.isLight} />
            </>
          </ModalProvider>
        </ThemeProvider>
        <GlobalStyle />
      </div>
    )
  }
}

export default Template
