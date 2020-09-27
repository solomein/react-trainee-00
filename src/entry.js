import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from 'components/layout/global-styles'
import Layout from 'components/layout/layout'
import * as Text from 'components/text/text'

function Entry() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Text.Header>Тестовое задание</Text.Header>
        <Text.Body1>Пора начинать!</Text.Body1>
      </Layout>
    </>
  )
}

ReactDOM.render(<Entry />, document.querySelector('main'))
