import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

const Todo = ({ todo: { value, id }, toggleTodo }) => {
  return <div onClick={() => toggleTodo(id)}>{value}</div>;
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
