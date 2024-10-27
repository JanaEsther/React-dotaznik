import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({ type, text, onSelected }) => {
  return (
    <div className="option" onClick={() => onSelected(type)}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
