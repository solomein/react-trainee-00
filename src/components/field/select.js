import React from 'react'
import * as S from './styled-field'

export default class Select extends React.Component {
  render() {
    return (
      <div style={this.props.style} className={this.props.className}>
        {this.renderLabel()}
        <S.ControlWrapper>{this.renderControl()}</S.ControlWrapper>
      </div>
    )
  }

  renderLabel() {
    if (this.props.label?.length) {
      return <S.Label>{this.props.label}</S.Label>
    }
  }

  renderControl() {
    return (
      <S.Control as="select" value={this.props.value} onChange={this.handleChange}>
        {this.props.children}
      </S.Control>
    )
  }

  handleChange = (ev) => {
    const value = ev.currentTarget.value
    this.props.onChange(value, ev)
  }
}
