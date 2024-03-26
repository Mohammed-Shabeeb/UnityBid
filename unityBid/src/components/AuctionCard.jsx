import React from "react";
import "./AuctionCard.css"

export const AuctionCard = ({details}) => {
    return(
        <div className="auction-card">
            <img src={details.logo} alt="logo" />
            <h3>{details.title}</h3>
            <h5>{details.community}</h5>
        </div>
    )
}