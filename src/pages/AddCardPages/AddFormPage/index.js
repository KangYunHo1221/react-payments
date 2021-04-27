import { useState } from 'react';
import { Button, Card, CreditCard, Title } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import './style.css';

export const AddFormPage = (props) => {
  const { setRoute } = props;
  const [cardCompany, setCardCompany] = useState({ name: '', color: '' });
  const [cardNumberInString, setCardNumberInString] = useState('');
  const [expirationDateInString, setExpirationDateInString] = useState('MM/YY');
  const [ownerNameInString, setOwnerNameInString] = useState('NAME');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="AddFormPage">
      <div className="AddFormPage__Title">
        <BackwardButton />
        <Title>카드 추가</Title>
      </div>
      <CreditCardPreview
        cardCompany={cardCompany}
        cardNumberInString={cardNumberInString}
        expirationDateInString={expirationDateInString}
        ownerNameInString={ownerNameInString}
      />
      <CardInfoForm
        setRoute={setRoute}
        setCardCompany={setCardCompany}
        setIsModalOpen={setIsModalOpen}
        setCardNumberInString={setCardNumberInString}
        setExpirationDateInString={setExpirationDateInString}
        setOwnerNameInString={setOwnerNameInString}
      />
      <CardCompanySelectModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCardCompany={setCardCompany}
      />
    </div>
  );
};

function BackwardButton() {
  const size = 16;
  const color = '#525252';

  return (
    <Button theme="backward" onClick={() => {}}>
      <svg viewBox={`0 0 ${size} ${size}`} height={size} width={size} fill="none">
        <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke={color} strokeWidth="1.5" />
      </svg>
    </Button>
  );
}

function CreditCardPreview({
  cardCompany,
  cardNumberInString,
  expirationDateInString,
  ownerNameInString,
}) {
  return (
    <div className="CreditCardPreview">
      <Card backgroundColor={cardCompany.color} boxShadow size="medium">
        <CreditCard
          cardCompany={cardCompany.name}
          cardNumber={cardNumberInString}
          expirationDate={expirationDateInString}
          ownerName={ownerNameInString}
        />
      </Card>
    </div>
  );
}
