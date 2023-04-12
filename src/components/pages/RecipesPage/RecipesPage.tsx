import { FC } from 'react'
import Link from 'next/link'
import Layout from '@/components/common/Layout'
import useStyles from './RecipesPage.styles'

const RecipesPage: FC = () => {
  const styles = useStyles()

  return (
    <Layout
      className={styles.root}
      meta={{
        title: '',
        description: ''
      }}
    >
      Recipes Page
      <Link href="/">to Home Page</Link>
    </Layout>
  )
}

export default RecipesPage
