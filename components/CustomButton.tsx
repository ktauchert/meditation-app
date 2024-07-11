import { Text, TouchableOpacity } from "react-native"

interface CustomButtonProps {
  onPress: () => any;
  title: string;
  textStyles?: string;
  containerStyles?: string;
  pushed?: boolean
}

const CustomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
  pushed = false
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={` rounded-xl min-h-[62px] justify-center items-center ${pushed ? 'bg-gray-500' : 'bg-gray-100'} ${containerStyles}`}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles} ${pushed ? 'text-white' : 'text-black'}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;