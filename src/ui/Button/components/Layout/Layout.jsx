import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
