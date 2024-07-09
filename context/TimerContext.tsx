import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface TimerContextType {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextType>({
  duration: 5 * 60,
  setDuration: () => {}
})

interface TimerProviderProps {
  children: ReactNode;
}

const TimerProvider = ({children}: TimerProviderProps) => {
  const [duration, setDuration] = useState<number>(5 * 60);

  return (
    <TimerContext.Provider value={{duration, setDuration}}>
      {children}
    </TimerContext.Provider>
  )
}
export default TimerProvider;