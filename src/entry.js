import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from 'components/layout/global-styles'
import Layout, { Group } from 'components/layout/layout'
import * as Text from 'components/text/text'
import Input from './components/field/input'
import Select from './components/field/select'

function Entry() {
  const [name, setName] = useState('')

  function getCallToActionText() {
    return name ? `Пора начинать, ${name}!` : 'Пора начинать!'
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Group>
          <Text.Header>Тестовое задание</Text.Header>
          <Text.Body1>{getCallToActionText()}</Text.Body1>
        </Group>
        <Group>
          <Input value={name} onChange={setName} placeholder="Имя" label="Ваше имя" />
        </Group>
        <Group>
          <Select value="yes" label="Готовы?">
            <option value="no">Нет</option>
            <option value="yes">Да</option>
          </Select>
        </Group>
      </Layout>
    </>
  )
}

ReactDOM.render(<Entry />, document.querySelector('main'))
