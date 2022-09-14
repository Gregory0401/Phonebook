import s from '../Filter/Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({filter, onChange}) => {
  return (
    <input className={s.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Find contact by name ←"
    />
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
