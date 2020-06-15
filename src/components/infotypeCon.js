import React, {useState, useContext} from "react";
import { InfoContext } from "./contexts/infoContext";
import { ResourceContext } from "./contexts/resourceContext";

const InfotypeBar = () => {

    const {res} = useContext(ResourceContext);

    const [all, setAll]= useState(true);
    const [videos, setVideos]= useState(false);
    const [guides, setGuides]= useState(false);
    const [white, setWhite]= useState(false);
    const [pod, setPod]= useState(false);

    const {addResType} = useContext(InfoContext);


    const handleAll = ()=> {
        setAll(true);
        setGuides(false);
        setVideos(false);
        setWhite(false);
        setPod(false);
        addResType (res, "All");
    }

    const handleGuides = ()=> {
        setAll(false);
        setGuides(true);
        setVideos(false);
        setWhite(false);
        setPod(false);
        addResType (res, "Papers and Guides");
    }

    const handleVideos = ()=> {
        setAll(false);
        setGuides(false);
        setVideos(true);
        setWhite(false);
        setPod(false);
        addResType (res, "Talks and Videos");
    }

    const handleWhite = ()=> {
        setAll(false);
        setGuides(false);
        setVideos(false);
        setWhite(true);
        setPod(false);
        addResType (res, "Whitepapers");
    }

    const handlePod = ()=> {
        setAll(false);
        setGuides(false);
        setVideos(false);
        setWhite(false);
        setPod(true);
        addResType (res, "Podcasts");
    }

    return (
        <div className="infotype-con">
            <button className={all?"infotype-on":"infotype"} onClick={handleAll}>All</button>
            <button className={videos?"infotype-on":"infotype"} onClick={handleVideos}>Videos</button>
            <button className={guides?"infotype-on":"infotype"} onClick={handleGuides}>Guides</button>
            <button className={white?"infotype-on":"infotype"} onClick={handleWhite}>Whitepapers</button>
            <button className={pod?"infotype-on":"infotype"} onClick={handlePod}>Podcasts</button>
        </div>
    );
};

export default InfotypeBar;
