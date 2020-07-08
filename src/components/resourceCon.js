import React, { useContext } from "react";
import { InfoContext } from "./contexts/infoContext";
import { ResourceContext } from "./contexts/resourceContext";
import InfoCard from "./infoCard";
import Footer from "./footer";

const ResourceBar = () => {
    const { resType } = useContext(InfoContext);
    const { res } = useContext(ResourceContext);
    let cards;
    if (resType === "All") {
        cards = res;
    } else {
        cards = resType;
    }

    let navData = cards.map((nav) => {
        return <InfoCard nav={nav} />;
    });

    return (
        <div>
            <div className="content-con">{navData}</div>
            <Footer />
        </div>
    );
};

export default ResourceBar;
