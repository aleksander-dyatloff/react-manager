import TextField from "@components/TextField";
import { FC } from "react";
import { Props } from "./types";

const Component: FC<Props> = (props) => {
  return (
    <TextField value="Caring Company" {...props} />
  )
}

export default Component