import React from 'react'
import { StyledMessage } from '../Styles/StyledComponents'

function Message() {
  return (
    <StyledMessage>
      <p>
        Add items in the form above
      </p>
      <span>
        No items in the invoice
      </span>
    </StyledMessage>
  )
}

export default Message