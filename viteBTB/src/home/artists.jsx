import React from 'react';
import './artists.css';
import { BlankSpace, CruelSummer, ShakeItOff, Lovely, Blue, Lunch, UMyEverything, OneDance, GodsPlan, NotLikeUs, MoneyTrees, LikeThat } from './songs';

export const TSwift = () => {
    return (
        <>
            <header className="position-relative">
                <img
                    src="https://media.gettyimages.com/id/1243395808/photo/nashville-tennessee-nsai-songwriter-artist-of-the-decade-honoree-taylor-swift-performs.jpg?s=612x612&w=0&k=20&c=3pp6H1DHGSOr3hCZZRRsiqaslRrC6_1l6ytlp8E6w6I="
                    className="img-fluid w-100"
                    alt="Header Image"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-4 fw-bold">Taylor Swift</h1>
                    <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
                </div>
            </header>

            <main>
                <div className="list-group">
                    <a href="/cruelSummer" onClick={CruelSummer} className="list-group-item list-group-item-action">Cruel Summer</a>
                    <a href="/shakeItOff" onClick={ShakeItOff} className="list-group-item list-group-item-action">Shake it Off</a>
                    <a href="/blankSpace" onClick={BlankSpace} className="list-group-item list-group-item-action">Blank Space</a>
                </div>
            </main>
        </>
    );
};

export const BillieEilish = () => {
    return (
        <>
            <header className="position-relative">
                <img
                    src="https://media.gettyimages.com/id/2066804427/photo/billie-eilish-performs-onstage-at-the-96th-annual-oscars-held-at-dolby-theatre-on-march-10.jpg?s=612x612&w=0&k=20&c=5faDFjz6nE1fUjZqbDABm3ImoThVy-T-kF7R_3LleO4="
                    className="img-fluid w-100"
                    alt="Billie Eilish"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-4 fw-bold">Billie Eilish</h1>
                    <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
                </div>
            </header>

            <main className="container my-4">
                <div className="list-group">
                    <a href="/lovely" onClick={Lovely} className="list-group-item list-group-item-action">Lovely</a>
                    <a href="/blue" onClick={Blue} className="list-group-item list-group-item-action">BLUE</a>
                    <a href="/lunch" onClick={Lunch} className="list-group-item list-group-item-action">LUNCH</a>
                </div>
            </main>
        </>
    );
};

export const Drake = () => {
    return (
        <>
            <header className="position-relative">
                <img
                    src="https://media.gettyimages.com/id/610058312/photo/las-vegas-nv-recording-artist-drake-performs-onstage-at-the-2016-iheartradio-music-festival-at.jpg?s=612x612&w=0&k=20&c=odEFeT8381FxUYXOcOd8PvY4g1aQDG78mw6a-Vz7pLs="
                    className="img-fluid w-100"
                    alt="Drake"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-4 fw-bold">Drake</h1>
                    <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
                </div>
            </header>

            <main className="container my-4">
                <div className="list-group">
                    <a href="/uMyEverything" onClick={UMyEverything} className="list-group-item list-group-item-action">U My Everything</a>
                    <a href="/oneDance" onClick={OneDance} className="list-group-item list-group-item-action">One Dance</a>
                    <a href="/godsPlan" onClick={GodsPlan} className="list-group-item list-group-item-action">God's Plan</a>
                </div>
            </main>
        </>
    );
};

export const KendrickLamar = () => {
    return (
        <>
            <header className="position-relative">
                <img
                    src="https://media.gettyimages.com/id/1405302709/photo/glastonbury-england-kendrick-lamar-performs-on-the-pyramid-stage-during-day-five-of.jpg?s=612x612&w=0&k=20&c=OXi-JHE6wBhzWT3EnFskTaNUlF6ui2KafNXkolP5ld4="
                    className="img-fluid w-100"
                    alt="Kendrick Lamar"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-4 fw-bold">Kendrick Lamar</h1>
                    <p className="lead">Pick a song you want to share your thoughts on or hear others!</p>
                </div>
            </header>

            <main className="container my-4">
                <div className="list-group">
                    <a href="/notLikeUs" onClick={NotLikeUs} className="list-group-item list-group-item-action">Not Like Us</a>
                    <a href="/moneyTrees" onClick={MoneyTrees} className="list-group-item list-group-item-action">Money Trees</a>
                    <a href="/likeThat" onClick={LikeThat} className="list-group-item list-group-item-action">Like That</a>
                </div>
            </main>
        </>
    );
};