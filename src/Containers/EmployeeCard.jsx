import React from 'react';
import TicketCountCard from '../components/TicketCountCard';
import team from '../data/data';
import './EmployeeCard.scss';

const EmployeeCards = () => {
  const employeesJSX = team.map((employee) => {
    return (
      <div className='employee__card'>
        <div className='name__container'>
          Name: {employee.name} <br /> Role: {employee.role}
        </div>
        <TicketCountCard />
      </div>
    );
  });
  return <div className='ticket__tracker'>{employeesJSX}</div>;
};
export default EmployeeCards;
