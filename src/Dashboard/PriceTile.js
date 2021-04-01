import React from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from "../Shared/Tile";

const PriceTileStyled = styled(SelectableTile)

export default ({price, index}) => {
    let sym = Object.keys(price)[0]
    let data = price[sym]['USD']
    return (
        <SelectableTile>
            {sym}
            {data.PRICE}
        </SelectableTile>)
}
