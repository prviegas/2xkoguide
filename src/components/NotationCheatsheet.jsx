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
          <div className="notation-content-wrapper">
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
            
            <div className="notation-explanation">
              <p>The numeric notation system is based on a keyboard numpad.</p>
              <p>Each number corresponds to a different direction, for example:</p>
              <ul>
                <li><strong>6</strong> = pressing forward</li>
                <li><strong>3</strong> = pressing forward and down at the same time</li>
                <li><strong>5</strong> = neutral position</li>
                <li><strong>2S2</strong> = pressing down and S2 at the same time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotationCheatsheet;
