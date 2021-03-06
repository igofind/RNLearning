import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const titleHeight = 45;
export default {
    onePixel: 1 / PixelRatio.get(),
    width,
    height,
    titleHeight,
    containerHeight: height - titleHeight - 24,
};
