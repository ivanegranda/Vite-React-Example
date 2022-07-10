import React, { useState } from 'react'
import {
  Button,
  InputWrapper,
  Label,
  StyledForm,
  StyledInput,
} from '../Styles/StyledComponents'

function Form({ addInvoice }) {
  const [inputName, setInputName] = useState('')
  const [inputPrice, setInputPrice] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    addInvoice(inputName, inputPrice)
    setInputName('')
    setInputPrice(0)
  }

  const handleNameChange = e => {
    setInputName(e.target.value)
  }

  const handlePriceChange = e => {
    setInputPrice(e.target.value)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor='name'>Item name *</Label>
        <StyledInput
          type='text'
          placeholder='Description'
          id='name'
          onChange={handleNameChange}
          value={inputName}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor='price'>Price USD *</Label>
        <StyledInput
          type='number'
          id='price'
          step={0.01}
          onChange={handlePriceChange}
          value={inputPrice}
          required
        />
      </InputWrapper>
      <Button>Add Line</Button>
    </StyledForm>
  )
}

export default Form
