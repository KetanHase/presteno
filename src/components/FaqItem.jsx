import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen ,
    };
  }

  toggleFaq = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { question, answer } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={`faq-item ${isOpen ? 'faq-active' : ''}`} onClick={this.toggleFaq}>
        <h3>{question}</h3>
        <div className="faq-content" style={{ display: isOpen ? 'block' : 'none' }}>
          <p>{answer}</p>
        </div>
        <i className={`faq-toggle bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
      </div>
    );
  }
}

export default FaqItem;