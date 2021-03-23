import UmiComp from '../../../components/umiComp';
import { connect } from 'react-redux';
import React from 'react';
import { Button } from 'antd';

class Comp1 extends UmiComp {

  render() {
    return (
      <>
        <h1>111{this.props.a}</h1>
      </>
    );
  }
}

const mapping = (states:any) => {
  const { a } = states.base;
  return { a };
};
export default connect()(Comp1);
