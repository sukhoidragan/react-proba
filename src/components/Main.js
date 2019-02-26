import React from 'react';

import Komentar from './Komentar';
import utisci from '../data/utisci.json';

const obrisi = () => {
    console.log("brisanje...");
}

const mapirano = utisci.map((obj, i) => 
<Komentar key={i} ime={obj.ime} utisak={obj.utisak} />
);
        
    


export default function Main () {
    return (
        <main>
            <h2>Utisci musterija</h2>
         {mapirano}
        </main>
    )
}