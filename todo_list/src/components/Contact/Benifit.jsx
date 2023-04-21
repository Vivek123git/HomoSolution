import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckIcon from '@mui/icons-material/Check';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Container } from 'react-bootstrap';



const BenefitsPage = () => {
  const benefits = [
    {
      icon: <  CurrencyRupeeIcon sx={{ fontSize: 40 }}/>,
      title: 'Pay after service',
      description: 'This is the description for benefit 1.'
    },
    {
      icon: <  AccessAlarmIcon sx={{ fontSize: 40 }}/>,
      title: 'Before 60 min. solution',
      description: 'This is the description for benefit 2.'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40 }}/>,
      title: 'Guarranty of all problem',
      description: 'This is the description for benefit 3.'
    },
    {
      icon: <CheckIcon sx={{ fontSize: 40 }}/>,
      title: 'Verified workers',
      description: 'This is the description for benefit 4.'
    },
    {
      icon: <SentimentNeutralIcon sx={{ fontSize: 40 }}/>,
      title: 'Experinced worker',
      description: 'This is the description for benefit 5.'
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 40 }}/>,
      title: 'Easy to book',
      description: 'This is the description for benefit 6.'
    }
  ];

  return (
    <div className="benefits-container" >
      <div className="container-fluid">
        <h3 className="text-center mb-5 text-light">Benefits</h3>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div style={{textAlign:"left"}}>{benefit.icon}</div>
              <h4 style={{textAlign:"left",fontSize:"large"}}>{benefit.title}</h4>
              <p style={{ fontSize:"small",textAlign:"left"}}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;