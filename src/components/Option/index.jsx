import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text}) => {
  return (
    <div className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
