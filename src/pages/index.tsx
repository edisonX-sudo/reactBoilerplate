import React, { Component } from 'react';
import styles from './index.css';
import { Link } from 'umi';
import { Button } from 'antd';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';


// @ts-ignore
const g_app: any = window.g_app;

class Home extends Component<any, any> {

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    g_app._store.dispatch({ type: 'root/fetchPhyPubIp' });
  }

  handleClickCopy = () => {
    const { ip } = this.props;
    copy(ip);
  };

  render() {
    const { ip } = this.props;
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>当前物理ip: {ip} <Button type={'dashed'} onClick={this.handleClickCopy}>复制</Button></li>
        </ul>
      </div>
    );
  }
}

const mapping = (states: any) => {
  const { ip } = states.root;
  return { ip };
};
export default connect(mapping)(Home);
