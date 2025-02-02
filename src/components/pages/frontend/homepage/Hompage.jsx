
import BannerSlider from './BannerSlider'
import Headings from '../Headings'
import LatestRecipe from './LatestRecipe'
import Footnote from '../Footnote'
import TopRating from './TopRating'
import useQueryData from '@/components/custom-hook/useQueryData'

const Hompage = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe"
  );
  return (
    <>
      <Headings/>
      <BannerSlider result={result}/>
      <LatestRecipe result={result}/>
      <TopRating/>
      <Footnote/>
    </>
  )
}

export default Hompage