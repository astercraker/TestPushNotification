import {StyleSheet, View, ViewStyle} from 'react-native';
import {globalColors} from '../../theme/theme';
import {TouchableRipple} from 'react-native-paper';

interface RippleButtonProps {
  onPress?: () => void;
  color?: string;
  rippleColor?: string;
  style?: ViewStyle;
  children: JSX.Element;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  onPress,
  style,
  color = globalColors.backgroundBlue,
  rippleColor = 'rgba(0, 0, 0, .05)',
  children,
}) => {
  return (
    <View style={{...styles.buttonContainer, backgroundColor: color}}>
      <TouchableRipple
        style={{...style, ...styles.rippleContainer}}
        onPress={onPress}
        rippleColor={rippleColor}>
        {children}
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // borderRadius: 10,
    overflow: 'hidden',
  },
  rippleContainer: {
    // borderRadius: 15,
    // paddingHorizontal: 15,
    // paddingVertical: 10,
  },
});

export default RippleButton;
