import React from 'react'
import TextBuilder from './text-builder'

function buildText(builderProps) {
  return function (props) {
    return <TextBuilder {...props} {...builderProps} />
  }
}

export const Header = buildText({
  w: 400,
  s: 24
})

export const Body1 = buildText({
  w: 400,
  s: 16
})

export const Body2 = buildText({
  w: 300,
  s: 16
})

export const Label = buildText({
  w: 500,
  s: 14
})

export const Description = buildText({
  w: 300,
  s: 14,
  fade: 48
})
