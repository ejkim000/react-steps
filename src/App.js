import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    step > 1 && setStep(step - 1);
  }

  const handleNext = () => {
    step < 3 && setStep(step + 1);
  }

  // const handleClose = () => setIsOpen(false);
  // const handleOpen = () => setIsOpen(true);

  const handleClopen = () => setIsOpen(!isOpen);

  return (
    <div>
      {isOpen ? (
        <div>
          <button
            className="close"
            // onClick={handleClose}
            onClick={handleClopen}
          > &times; </button>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? 'active' : ''}>1</div>
              <div className={step >= 2 ? 'active' : ''}>2</div>
              <div className={step >= 3 ? 'active' : ''}>3</div>
            </div>
            <p className="message"> Step {step}: {messages[step - 1]}</p>
            <div className="buttons">
              <button
                style={{ backgroundColor: '#7950f2', color: '#fff' }}
                onClick={handlePrevious}
              >Previous</button>
              <button
                onClick={handleNext}
                style={{ backgroundColor: '#7950f2', color: '#fff' }}
              >Next</button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="close"
          // onClick={handleOpen}
          onClick={() => setIsOpen(!isOpen)}
        > &#10003; </button>
      )}
    </div>
  );
}

export default App;
