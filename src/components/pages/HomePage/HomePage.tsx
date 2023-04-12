import { FC } from 'react'
import Link from 'next/link'
import Layout from '@/components/common/Layout'
import useStyles from './HomePage.styles'

const HomePage: FC = () => {
  const styles = useStyles()

  return (
    <Layout
      className={styles.root}
      meta={{
        title: '',
        description: ''
      }}
    >
      Home Page
      <Link href="/recipes">to Recipes Page</Link>
    </Layout>
  )
}

export default HomePage
