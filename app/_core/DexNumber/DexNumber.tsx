import { Typography } from "@mui/material";
import * as css from "./DexNumber.css";

type DexNumberProps = {
  value: number;
};

const DexNumber = ({ value }: DexNumberProps) => {
  const notANumber = isNaN(value);
  const notAnInteger = value % 1 !== 0;

  if (notANumber || notAnInteger) {
    throw new Error("Invalid data type for DexNumber");
  }

  const number = value.toString().padStart(3, "0");

  return <Typography className={css.dexNumber}>{`#${number}`}</Typography>;
};

export default DexNumber;
