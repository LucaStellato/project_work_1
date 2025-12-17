import { useState } from "react"
import clienti from "../data/clienti" //prendo la lista clienti dal file clienti.jsx
import viaggi from "../data/viaggi" //prendo la lista dei viaggi nel file viaggi.jsx

export default function HomePage() {
    const viaggiatori = clienti

    const [travel, setTravel] = useState(viaggi) //inserisco nello state di travel la lista di viaggi importata

    console.log(viaggiatori)
    return (
        <>
            <h1>Aggiungere la lista dei viaggi qui!!</h1>
            {//faccio un map dei viaggi per stamparli a schermo e controllare se i dati vengono aquisiti
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Destinazione</th>
                            <th scope="col">Data Partenza</th>
                            <th scope="col">Data Ritorno</th>
                        </tr>
                        <tbody>

                        </tbody>
                    </thead>
                </table>
                
                
                travel.map(el => (
            <h2 key={el.id}>{el.destinazione}</h2>
            ))
            }
        </>
    )
}