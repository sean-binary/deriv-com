import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { OTCUS, OTCUSTECH, OTCWALLSTREET } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;

    img {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }
`

const Americas = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={OTCUS} />
                <Text>{localize('US Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={OTCUSTECH} />
                <Text>{localize('US Tech Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={OTCWALLSTREET} />
                <Text>{localize('Wall Street Index')}</Text>
            </Symbol>
        </>
    )
}

export default Americas
