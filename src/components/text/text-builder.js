import React from 'react'
import styled from 'styled-components'

const TextBuilder = styled.div`
  font-style: normal;
  font-family: Roboto, sans-serif;
  line-height: 1.3;
  font-size: ${(props) => (typeof props.s === 'number' ? `${props.s}px` : props.s)};
  font-weight: ${(props) => props.w};
  color: ${(props) => (props.fade ? `rgba(0,0,0,.${props.fade})` : '#000')};
`

export default TextBuilder
