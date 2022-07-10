import { Fragment, useState, useEffect } from 'react'
import Form from './Components/Form'
import List from './Components/List'
import Message from './Components/Message'
import GlobalStyle from './Styles/GlobalStyles'
import { Container } from './Styles/StyledComponents'

function App() {
  const [invoiceList, setInvoiceList] = useState([])

  const addInvoice = (name, price) => {
    setInvoiceList([...invoiceList, { name: name, price: price }])
  }

  let totalCount = 0
  invoiceList.map(item => {
    totalCount += parseFloat(item.price)
  })

  useEffect(() =>{
    let data = localStorage.getItem('invoices')
    if(data)
      setInvoiceList(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoiceList))
  }, [invoiceList])
  

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Form addInvoice={addInvoice} />
        {invoiceList.length === 0 ? (
          <Message />
        ) : (
          <List invoiceList={invoiceList} total={totalCount} />
        )}
      </Container>
    </Fragment>
  )
}

export default App
