import styled, { css } from 'styled-components'
import * as Text from 'components/text/text'

export const ControlWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.16);

  ${(props) =>
    props.focused &&
    css`
      border-color: #2196f3;
    `}
`

export const Label = styled(Text.Label)`
  margin-bottom: 8px;
`

export const Control = styled.div`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;

  display: block;
  box-sizing: border-box;
  min-height: 40px;
  margin: 0;
  padding: 0;
  line-height: 40px;
  border: 0;
  background: transparent;
  width: 100%;
  outline: 0;
  text-overflow: ellipsis;
  border-radius: 0;
  position: relative;

  &::-ms-clear {
    display: none;
  }

  &::placeholder {
    &:first-letter {
      text-transform: uppercase;
    }
  }
`
