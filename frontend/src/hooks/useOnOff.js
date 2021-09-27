import { useState } from "react"

export const useOnOff = (initState=true) => {
  const [state, setState] = useState(initState)
  const turnBtn = () => setState(!state)
  return [state, turnBtn]
}
