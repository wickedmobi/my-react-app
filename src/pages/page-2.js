import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>About us Page</h1>
    <p>Welcome to About us page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
