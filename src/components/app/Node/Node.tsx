import classes from './Node.module.css';
import ArrowImage from '../../../assets/right-arrow.png';

interface Props {
  value: string;
}

export default function Node({ value }: Props) {
  return (
    <div className={classes['node-container']}>
      <div className={classes.node}>{value}</div>
      <img src={ArrowImage} alt="right-arrow" height="60" />
    </div>
  )
}