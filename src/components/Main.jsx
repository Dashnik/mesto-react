import React from 'react';

function Main(){
    return(
        <main className="content">
        <section className="profile">
            <div className="profile__photo_container">
                <img src="#" className="profile__image" alt='Жак-Ив Кусто'/>
                <img src="./images/EditPen.svg" className="penEdit" alt="PenEdit"/>
             </div>
                <div className="profile__info">
                <div className="profile__info-table">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__name-edit"></button>
                </div>
                <p className="profile__description"></p>
            </div>
            <div className="profile__rectangle">
                <button type="button" className="profile__vector"> </button>
            </div>
        </section>
        <section className="elements">
        </section>
    </main>
    )
}


export default Main;