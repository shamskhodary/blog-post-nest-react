import { FC } from 'react'
import { useSelector } from 'react-redux'
import BlogContainer from '../../components/Blogs/BlogContainer'
import ApplicationBar from '../../components/AppBar'
import { RootState } from '../..'
import Navbar from '../../components/Navbar'

const Home:FC = () => {
  const { isLogged } = useSelector((state:RootState) => state.authenticationSlice)

  return (
    <div className="homepage">
      {isLogged ? <ApplicationBar /> : <Navbar />}
      <BlogContainer />
    </div>
  )
}

export default Home
