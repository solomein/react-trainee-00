import React, { useState, useEffect } from 'react'
import * as S from './styled-field'

export default function Input(props) {
  const [value, setValue] = useState(props.value || '')
  const [focus, setFocus] = useState(false)

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

  function handleFocus(ev) {
    setFocus(true)
    props.onFocus && props.onFocus(value, ev)
  }

  function handleBlur(ev) {
    setFocus(false)
    props.onBlur && props.onBlur(value, ev)
  }

  return (
    <div style={props.style} className={props.className}>
      {renderLabel()}
      <S.ControlWrapper focused={focus}>
        <S.Control
          as="input"
          value={value}
          placeholder={props.placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={props.autoFocus}
          type={props.type}
        />
      </S.ControlWrapper>
    </div>
  )
}
