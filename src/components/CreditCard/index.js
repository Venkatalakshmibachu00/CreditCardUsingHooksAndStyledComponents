// Write your code here
import {useState} from 'react'

import {
  CreditCardMainContainer,
  CreditCardContainer,
  Title,
  UnderLine,
  CreditCardConst,
  Number,
  NameLabel,
  Name,
  InputContainer,
  InputPaymentContainer,
  PaymentTitle,
  NameInput,
  NumberInput,
} from './styledComponents'

const CreditCard = () => {
  const [adharNum, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)

  const onChangeName = event => setName(event.target.value)

  return (
    <CreditCardMainContainer>
      <CreditCardContainer>
        <Title>CREDIT CARD</Title>
        <UnderLine />
        <CreditCardConst data-testid="creditCard">
          <Number>{adharNum}</Number>
          <NameLabel>CARDHOLDER NAME</NameLabel>
          <Name>{name}</Name>
        </CreditCardConst>
      </CreditCardContainer>
      <InputPaymentContainer>
        <InputContainer>
          <PaymentTitle>Payment Method</PaymentTitle>
          <NumberInput
            placeholder="Card Number"
            type="text"
            value={adharNum}
            onChange={onChangeNumber}
          />
          <NameInput
            placeholder="Cardholder Name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </InputContainer>
      </InputPaymentContainer>
    </CreditCardMainContainer>
  )
}

export default CreditCard
