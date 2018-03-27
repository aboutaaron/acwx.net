import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Home | Aaron Colby Williams</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Righteous" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous" />
    </Helmet>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
