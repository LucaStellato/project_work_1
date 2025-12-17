import { useState } from "react"
import clienti from "../data/clienti" //prendo la lista clienti dal file clienti.jsx
import viaggi from "../data/viaggi" //prendo la lista dei viaggi nel file viaggi.jsx

export default function HomePage() {
    const viaggiatori = clienti

    const [travel, setTravel] = useState(viaggi) //inserisco nello state di travel la lista di viaggi importata

    console.log(viaggiatori)
    return (
        <>
            <div className=" d-flex justify-content-center">
                <h1>Travel list</h1>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Destinazione</th>
                        <th scope="col">Data Partenza</th>
                        <th scope="col">Data Ritorno</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {travel.map(el => (
                        <tr>
                            <td>{el.destinazione}</td>
                            <td>{el.dataPartenza}</td>
                            <td>{el.dataRitorno}</td>
                            <td><button type="button" className="btn btn-primary">view details</button></td>
                        </tr>

                    ))}

                </tbody>

            </table>



        </>
    )
}
