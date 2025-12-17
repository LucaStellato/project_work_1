import { useState } from "react"
import clienti from "../data/clienti" //prendo la lista clienti dal file clienti.jsx
import viaggi from "../data/viaggi" //prendo la lista dei viaggi nel file viaggi.jsx
import { Link } from "react-router-dom"

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
                            <td><Link to={`/detail/${travel.id}`} className="btn btn-primary">view details</Link></td>
                        </tr>

                    ))}

                </tbody>

            </table>



        </>
    )
}
