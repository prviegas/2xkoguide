function NotationCheatsheet({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="notation-cheatsheet-overlay" onClick={onClose}>
      <div className="notation-cheatsheet-content" onClick={(e) => e.stopPropagation()}>
        <div className="notation-cheatsheet-header">
          <h3>Numpad Notation Guide</h3>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <div className="notation-cheatsheet-body">
          <p>Numpad notation uses numbers to represent directions, based on a keyboard numpad layout:</p>
          
          <div className="numpad-grid">
            <div className="numpad-cell">
              <i className="fas fa-arrow-up arrow rotate-315"></i>
              <span className="number">7</span>
            </div>
            <div className="numpad-cell">
              <i className="fas fa-arrow-up arrow"></i>
              <span className="number">8</span>
            </div>
            <div className="numpad-cell">
              <i className="fas fa-arrow-up arrow rotate-45"></i>
              <span className="number">9</span>
            </div>
            
            <div className="numpad-cell">
              <i className="fas fa-arrow-left arrow"></i>
              <span className="number">4</span>
            </div>
            <div className="numpad-cell">
              <i className="fas fa-circle arrow neutral"></i>
              <span className="number">5</span>
            </div>
            <div className="numpad-cell">
              <i className="fas fa-arrow-right arrow"></i>
              <span className="number">6</span>
            </div>
            
            <div className="numpad-cell">
              <i className="fas fa-arrow-down arrow rotate-45"></i>
              <span className="number">1</span>
            </div>
            <div className="numpad-cell">
              <i className="fas fa-arrow-down arrow"></i>
              <span className="number">2</span>
            </div>
            <div className="numpad-cell">
              <i className="fas fa-arrow-down arrow rotate-315"></i>
              <span className="number">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotationCheatsheet;
