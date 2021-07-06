import React, { useEffect, useState } from 'react'
import * as S from './styled-field'

export default function Select(props) {
  const [value, setValue] = useState(props.value || '')

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  function renderLabel() {
    if (props.label) {
      return <S.Label>{props.label}</S.Label>
    }
  }

  function handleChange(ev) {
    const value = ev.currentTarget.value
    setValue(value)
    props.onChange && props.onChange(value, ev)
  }

  return (
    <div style={props.style} className={props.className}>
      {renderLabel()}
      <S.ControlWrapper focused={focus}>
        <S.Control as="select" value={value} onChange={handleChange}>
          {props.children}
        </S.Control>
      </S.ControlWrapper>
    </div>
  )
}
