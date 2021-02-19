import UmiComp from '../../components/umiComp';
import { connect } from 'react-redux';
import React from 'react';
import { Button, Col, Row } from 'antd';

class Inner extends UmiComp {
  private calA(diff:number) {
    return () => {
      // @ts-ignore
      let g_app:any = window.g_app;
      console.log(diff, g_app);
      g_app._store.dispatch({ type: 'base/calA', payload: { diff } });
    };
  }

  render() {
    return (
      <>
        <h1>result{this.props.a}</h1>
        <Row justify={"space-around"} type={"flex"}>
          <Col>
            <Button type={'primary'} size={'large'} onClick={this.calA(1)}>+1</Button>
          </Col>
          <Col>
            <Button type={'primary'} size={'large'} onClick={this.calA(-1)}>-1</Button>
          </Col>
        </Row>
      </>
    );
  }
}

const mapping = (states:any) => {
  const { a } = states.base;
  return { a };
};
export default connect(mapping)(Inner);
