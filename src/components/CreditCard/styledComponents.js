// Style your elements here
import styled from 'styled-components'

export const CreditCardMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  font-family: 'Roboto';
`

export const CreditCardContainer = styled.div`
  width: 50vw;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputPaymentContainer = styled(CreditCardContainer)`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 35px;
  color: #ffffff;
  font-weight: 550;
  margin-bottom: 0px; 
`

export const UnderLine = styled.hr`
  width: 170px;
  color: #ffd773;
  margin-top: 0px;
`

export const CreditCardConst = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 320px;
  color: #ffffff;
  height: 190px;
  margin-top: 120px;
  border-radius: 10px;
  padding: 12px;
`

export const Number = styled.p`
  font-size: 25px;
  font-weight: 550;
  margin-top: 50px
`

export const NameLabel = styled.p`
  margin-top: 40px;
  font-size: 12px;
`

export const Name = styled.p`
  font-size: 15px;
`

export const InputContainer = styled.div`
  height: 190px;
  width: 320px;
  background-color: #c3cad9;
  border-radius: 10px;
  padding: 12px
`

export const PaymentTitle = styled.h2`
  font-size: 22px;
  color: #344e7a;
  tect-align: center
`

export const NumberInput = styled.input`
  width: 90%;
  padding: 8px;
  background-color: #d3d9e0;
  border: none;
  margin-bottom: 10px;
`

export const NameInput = styled(NumberInput)``
