import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Learn to Design & Code React Apps</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with react and swift</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
