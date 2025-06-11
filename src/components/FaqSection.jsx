import React, { Component } from 'react';
import FaqItem from './FaqItem';
import '../assets/styles/faq.css'

class FaqSection extends Component {
  render() {
    const faqs = [
      {
        question: 'Non consectetur a erat nam at lectus urna duis?',
        answer:
          'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida...',
      },
      {
        question: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
        answer:
          'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec...',
      },
      {
        question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
        answer:
          'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim...',
      },
      {
        question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
        answer:
          'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec...',
      },
      {
        question: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
        answer:
          'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in...',
      },
      {
        question: 'Perspiciatis quod quo quos nulla quo illum ullam?',
        answer:
          'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi...',
      },
    ];

    return (
      <section id="faq" className="faq section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-container">
                {faqs.map((item, index) => (
                  <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    defaultOpen={index === 0} // First FAQ open by default
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqSection;
