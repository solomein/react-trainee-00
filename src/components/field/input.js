import React from 'react'
import * as S from './styled-field'

export default class Input extends React.Component {
  state = {
    value: this.props.value || '',
    focused: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value || ''
      })
    }
  }

  render() {
    return (
      <div style={this.props.style} className={this.props.className}>
        {this.renderLabel()}
        <S.ControlWrapper focused={this.state.focused}>{this.renderControl()}</S.ControlWrapper>
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
      <S.Control
        as="input"
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        autoFocus={this.props.autoFocus}
        type={this.props.type}
      />
    )
  }

  handleChange = (ev) => {
    const value = ev.currentTarget.value

    this.setState({ value })
    this.props.onChange(value, ev)
  }

  handleFocus = (ev) => {
    this.setState({
      focused: true
    })

    if (this.props.onFocus) {
      this.props.onFocus(this.props.value, ev)
    }
  }

  handleBlur = (ev) => {
    this.setState({
      focused: false
    })

    if (this.props.onBlur) {
      this.props.onBlur(this.props.value, ev)
    }
  }
}
