import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({ type, text }) => {
  return (
    <div className="option" onClick={console.log('Spíše souhlasím.')}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
