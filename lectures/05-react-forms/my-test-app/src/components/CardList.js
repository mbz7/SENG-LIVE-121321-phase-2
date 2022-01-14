// Will accept an array of Card objects as props
import Card from './Card';

function CardList({ cards }) {
    // cards => props object
    // { cards } => props.cards

    return (
        <div className="card-list">
            <h2 className="component-name">CardList Component</h2>
            <br />

            {/* Avoid direct state mutation using spread operator */}
            {[...cards].reverse().map(card => {
                return (
                    <Card 
                        key={card.id} 
                        title={card.title} 
                        content={card.content} 
                    />
                );
            })}
        </div>
    );
}

export default CardList;