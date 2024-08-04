import Lottie from 'react-lottie';
import animationData from './Animation.json'; // Replace with the path to your JSON file

const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;
