import { useEffect } from "react"
import { useParams } from "react-router-dom"
import viaggi from "../data/viaggi"
import { useState } from "react"
import { useGlobalProvider } from "../context/GlobalContext"

export default function DetailTravel() {
    const { id } = useParams()
    const { travelers } = useGlobalProvider()

    const traveler = travelers.filter(el => el.viaggio_id == id)

    console.log(traveler)
    return (
        <>
            {
                traveler.map(el => (
                    <div key={el.id} className="accordion mt-4" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${el.id}`}
                                    aria-expanded="true"
                                    aria-controls={`${el.id}`}
                                >
                                    {el.nome} {el.cognome}
                                </button>
                            </h2>
                            <div
                                id={`${el.id}`}
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="row row-cols-5">
                                        <div className="col fw-bold">Nome</div>
                                        <div className="col fw-bold">Cognome</div>
                                        <div className="col fw-bold">Email</div>
                                        <div className="col fw-bold">Codice Fiscale</div>
                                        <div className="col">{el.nome}</div>
                                        <div className="col">{el.email}</div>
                                        <div className="col">{el.cognome}</div>
                                        <div className="col">{el.codiceFiscale}</div>
                                        <div className="col">{el.telefono}</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                ))
            }
        </>
    )
}