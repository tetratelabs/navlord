const Infotypes = (res, type)=> {
    let results = res.filter(content => 
        content.infotype === type
    )

    return results;
     
}

export default Infotypes;