const buttonStyles = {
    display: "flex",
    gap: 5,
    
}
export default function Options({ onClickButton, totalFeedback, onReset }) {
    return <div style={buttonStyles}>
        <button onClick={() => onClickButton('good')}>Good</button>
        <button onClick={() => onClickButton('neutral')}>Neutral</button>
        <button onClick={() => onClickButton('bad')}>Bad</button>
        {totalFeedback > 0 && (<button onClick={onReset}>Reset</button>)}
    </div>
}