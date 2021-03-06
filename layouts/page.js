import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled, { keyframes } from 'styled-components'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import config from '../config'

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

const ContentWrapper = styled.div`
  animation: ${fadeIn} 0.2s ease-in forwards;
`

const Main = styled.div`
  padding: 25px 30px;
  margin: 10px auto;
  margin-top: -200px;
  width: 90%;
  max-width: 1200px;
  color: ${config.lightText};
  @media (max-width: 500px) {
    padding: 0;
  }
  a {
    color: ${config.mainColor};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a:hover {
    color: #000;
    text-decoration: none;
  }
`
export default class Page extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }
  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    return (
      <div>
        {this.state.loaded && (
          <div>
            <Hero
              title={this.props.title || ''}
              subTitle={this.props.subTitle || ''}
            />
            <Main>
              <Navbar links={config.navbarLinks} />
              <ContentWrapper>{this.props.children}</ContentWrapper>
              <Footer />
            </Main>
          </div>
        )}
      </div>
    )
  }
}
