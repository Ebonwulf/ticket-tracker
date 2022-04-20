import { useState } from 'react';
import './TicketCountCard.scss';

const TicketCountCard = () => {
  const [ticket, setTicket] = useState(0);
  const handleMinusClick = () => {
    if (ticket > 0) {
      setTicket(ticket - 1);
    } else {
      setTicket(0);
    }
  };
  const handlePlusClick = () => {
    setTicket(ticket + 1);
  };
  return (
    <div className='counter__card'>
      <h4>Counter</h4>
      <p>{ticket}</p>
      <div>
        <button onClick={handleMinusClick}>-</button>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
};
export default TicketCountCard;
