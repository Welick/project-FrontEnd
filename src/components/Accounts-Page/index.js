import React, { Fragment, useState, useEffect } from 'react'
import smurfService from '../../services/smurf-service'
import Product from './Product'
import { helper } from '../../utils/shop-accounts-utils'

const AccountsPage = (props) => {
    const type = props.match.params.accountType

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        (async () => {
            setAccounts(await smurfService.loadAll(type))
            // const accs = await smurfService.loadAll(type)
        })()
    }, [])

    return (
        <Fragment>
            {accounts.map((acc) => {
                console.log(props.match)
                return <Product image={helper.image}
                    location={`/accounts/${acc.type}/${acc._id}`}
                    text={`Account price: ${acc.price}`}
                    value1={`Account rank: ${acc.rank}`}
                    value2={`Number of champions: ${acc.champions}`}
                    value3={`Number of skins: ${acc.skins}`} />
            })}
        </Fragment>
    )
}

export default AccountsPage