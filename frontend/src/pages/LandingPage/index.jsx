import React from 'react';
import FeatureItem from '../../components/FeatureItem';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';

const features = [
  {
    image: iconChat,
    title: 'You are our #1 priority',
    paragraph:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    image: iconMoney,
    title: 'More savings means higher rates',
    paragraph: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    image: iconSecurity,
    title: 'Security you can trust',
    paragraph: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

export default function LandingPage() {
  return (
    <main className="main">
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map(({ image, title, paragraph }, i) => (
          <FeatureItem key={i} image={image} title={title} paragraph={paragraph} />
        ))}
      </section>
    </main>
  );
}
