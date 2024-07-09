import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Content = ({ children, addClass }: { children: any; addClass: string }) => {
  return (
    <SafeAreaView className="flex-1 mx-3 my-10 justify-between">
      {children}
    </SafeAreaView>
  )
}

export default Content