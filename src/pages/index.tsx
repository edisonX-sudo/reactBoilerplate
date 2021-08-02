import React, { Component } from 'react';
import styles from './index.css';
import { Link } from 'umi';
import { Button, Card, Col, Row } from 'antd';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';


// @ts-ignore
const g_app: any = window.g_app;
// img from https://www.flaticon.com/search?word=http&license=all&style=all&order_by=4&type=icon
const NAS_SITE = [
  { name: 'Home', url: 'http://home.xskonline.co:8888', img: <img src={require('@/assets/homepage.png')} /> },
  { name: 'FileUpload', url: 'http://file.xskonline.co:8888', img: <img src={require('@/assets/https.png')} /> },
  { name: 'Swagger', url: 'http://swagger.xskonline.co:8888', img: <img src={require('@/assets/panda.png')} /> },
];


class Home extends Component<any, any> {

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    g_app._store.dispatch({ type: 'root/fetchPhyPubIp' });
  }

  handleClickCopy = () => {
    const { ip } = this.props;
    copy(ip);
  };

  jump2Site = (url: string) => {
    const w = window.open('about:blank');
    w.location.href = url;
  };


  genCard4NasSite = (batchInx: number, batchNum: number) => {
    let subCardLists = [];
    let batchSpan = 24 / batchNum;
    let firstInx = batchInx * batchNum;
    for (let i = firstInx; i < firstInx + batchNum; i++) {
      let item = NAS_SITE[i];
      if (!item)
        break;
      subCardLists[i] = (
        <Col span={batchSpan}>
          <Card title={item.name}
                bordered={false}
                hoverable
                onClick={() => this.jump2Site(item.url)}
                cover={item.img}>
            {item.url}
          </Card>
        </Col>
      );
    }
    return (<>
      {
        subCardLists.map(card => card)
      }
    </>);
  };

  render() {
    const { ip } = this.props;
    return (
      <div>
        <Row gutter={16}>
          {this.genCard4NasSite(0, 4)}
        </Row>
      </div>
    );
  }
}

const mapping = (states: any) => {
  const { ip } = states.root;
  return { ip };
};
export default connect(mapping)(Home);
