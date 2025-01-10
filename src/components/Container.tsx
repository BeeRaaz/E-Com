import { ContainerProps } from "../types/Container"

const Container = ({ children, classes }: ContainerProps) => {
  return (
    <div className={`w-full max-w-[1320px] mx-auto px-5 ${classes}`}>
      { children }
    </div>
  )
}

export default Container
