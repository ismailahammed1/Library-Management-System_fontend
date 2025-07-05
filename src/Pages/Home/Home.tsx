import { Hero } from "./Hero"
import HomeBookList from "./HomeBookList"
import FeaturedBookAndAuthors from "./FeaturedBookAndAuthors"
import HomeShowcaseSections from "./HomeShowcaseSections"

const Home = () => {
  return (
    <div className="max-w-full mx-auto">
      <Hero/>
      <HomeBookList/>
      <FeaturedBookAndAuthors/>
      <HomeShowcaseSections/>
    </div>
  )
}

export default Home