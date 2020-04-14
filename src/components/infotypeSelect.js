import React from "react";

const InfotypeSelect = ({ type, setSelect }) => {
    const handleClick = () => {
        setSelect(type.infotype);
    };

    return (
        <div className="infotype" onClick={handleClick}>
            <p>{type.infotype}</p>
            <p>({type.info.length})</p>
        </div>
    );
};

export default InfotypeSelect;
