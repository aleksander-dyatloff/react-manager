import { FC } from "react";
import { Props } from "./types";
import * as styles from './styles.css';
import Image from "next/image";
import classNames from "classnames";

const Component: FC<Props> = ({
  alt,
  color,
  image,
  className,
}) => {
  if (image) return (
    <Image className={classNames(styles.wrapper, className)} width={20} height={20} src={image.src} alt={alt} />
  )

  return (
    <div className={classNames(styles.wrapper, className)} style={{ backgroundColor: color ?? 'gray' }}>
      {alt}
    </div>
  )
}

export default Component