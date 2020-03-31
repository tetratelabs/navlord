import React from 'react';

const InfotypeSelect = ({type, setSelect}) => {
    const handleClick = ()=> {
        setSelect(type.infotype);
    }
    return ( 
        <div className="infotype" onClick={handleClick}>{type.infotype}</div>
     );
}
 
export default InfotypeSelect;