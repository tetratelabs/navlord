import React, {useState} from "react";

const InfotypeBar = () => {

    const [all, setAll]= useState(true);
    const [videos, setVideos]= useState(false);
    const [guides, setGuides]= useState(false);
    const [white, setWhite]= useState(false);
    const [pod, setPod]= useState(false);

    const handleAll = ()=> {
        setAll(true);
        setGuides(false);
        setVideos(false);
        setWhite(false);
        setPod(false);
    }

    const handleGuides = ()=> {
        setAll(false);
        setGuides(true);
        setVideos(false);
        setWhite(false);
        setPod(false);
    }

    const handleVideos = ()=> {
        setAll(false);
        setGuides(false);
        setVideos(true);
        setWhite(false);
        setPod(false);
    }

    const handleWhite = ()=> {
        setAll(false);
        setGuides(false);
        setVideos(false);
        setWhite(true);
        setPod(false);
    }

    const handlePod = ()=> {
        setAll(false);
        setGuides(false);
        setVideos(false);
        setWhite(false);
        setPod(true);
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
