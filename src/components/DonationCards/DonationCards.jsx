/* eslint-disable react/prop-types */
import DonationCard from "./DonationCard";

const DonationCards = ({cards}) => {
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
            {
                cards.cards?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;