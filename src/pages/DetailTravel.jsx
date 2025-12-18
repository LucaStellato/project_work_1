import { useEffect } from "react"
import { useParams } from "react-router-dom"
import viaggi from "../data/viaggi"
import { useState } from "react"

export default function DetailTravel() {
    const { id } = useParams()
    const [travel, setTravel] = useState(null)
    return (
        <>
            <h1>{travel.destinazione}</h1>
        </>
    )
}