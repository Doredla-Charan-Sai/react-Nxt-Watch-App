import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {LoaderDiv} from './styledComponents'

const LoaderView = () => (
  <LoaderDiv data-testid="loader">
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </LoaderDiv>
)
export default LoaderView
