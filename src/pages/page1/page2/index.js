import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Page2 = () => {
    return (
        <Layout>
            <div>
                <Breadcrumb
                    location={window.location}
                    crumbLabel="Who can open an account"
                    crumbStyle={{ color: '#666' }}
                    crumbActiveStyle={{ color: 'orange' }}
                />
                <h2>hhi this is page 2</h2>
                <Link to="/">PAGE2</Link>
            </div>
        </Layout>
    )
}

Page2.propTypes = {
    location: PropTypes.string,
}
export default WithIntl()(Page2)
