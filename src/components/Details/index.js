import React, { Fragment, useState, useEffect } from 'react'
import smurfService from '../../services/smurf-service'

const Details = (props) => {
    const id = props.match.params.id
    const accountType = props.match.params.accountType

    const [smurf, setSmurf] = useState({})

    useEffect(() => {
        (async () => {
            setSmurf(await smurfService.loadOne(id))
        })()
    }, [id])

    return (
        <Fragment>
            <div>Region: {smurf.region}</div>
            <div>Champions count: {smurf.champions}</div>
            <div>Skins count: {smurf.skins}</div>
            <div>Price: {smurf.price}</div>
            <div>Division: {smurf.rank}</div>
        </Fragment>
    )
}

export default Details