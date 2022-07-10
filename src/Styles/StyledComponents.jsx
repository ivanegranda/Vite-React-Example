import styled from 'styled-components'

const Container = styled.div`
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  background-color: #7f8c8d;
`

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
`

const StyledInput = styled.input`
  height: 50px;
  padding: 10px;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid #3498db;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ type }) => (type === 'text' ? 'width: 240px' : '')};
  ${({ type }) => (type === 'number' ? 'width: 140px' : '')};
`

const Button = styled.button`
  height: 50px;
  padding: 5px 15px;
  background-color: #2980b9;
  color: white;
  border: none;
  cursor: pointer;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`

const TableRow = styled.tr`
  border-bottom: 1px solid #bdc3c7;
  ${({ head }) => (head ? 'border-bottom: none;' : '')}
  ${({ total }) => (total ? 'border-bottom: none;' : '')}
`

const TableHead = styled.th`
  ${({ center }) => (center ? `text-align: center;` : ``)}
`

const TableDes = styled.td`
  padding-top: 10px;
  ${({ center }) => (center ? `text-align: center;` : ``)}
`

const TotalTD = styled.td`
  font-weight: 600;
  font-size: 18px;
  padding-top: 5px;
  ${({ center }) => (center ? `text-align: center;` : ``)}
`

const StyledMessage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  p {
    font-size: 18px;
    font-weight: 600;
  }
`

const DeleteBtn = styled.button`
  background-color: red;
  padding: 5px 8px;
  color: white;
  font-weight: 800;
  margin-bottom: 10px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`

export {
  Container,
  StyledForm,
  InputWrapper,
  Label,
  StyledInput,
  Button,
  Table,
  TableRow,
  TableHead,
  TableDes,
  TotalTD,
  StyledMessage,
  DeleteBtn,
}
