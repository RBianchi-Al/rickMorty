
import Lottie from 'react-lottie';
import * as load from './load.json'
import { useCards } from '../../hooks/useCards';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: load.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Loading = () => {
    const {loading} = useCards()
  return (
    <div style={{marginTop: '10rem'}}>
      {loading && <Lottie options={defaultOptions} height={120} width={120} />}
    </div>
  )
}

export default Loading;