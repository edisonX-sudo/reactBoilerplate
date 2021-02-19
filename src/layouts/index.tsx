import React from 'react';
// @ts-ignore
import styles from './index.css';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';


const BasicLayout: React.FC = props => {
  return (
    <ProLayout
      title={'me'}
      menu={{
        loading:false,
      }}
      location={{
        pathname: '/',
      }}
    >
      <PageContainer title={''} content={props.children}></PageContainer>
    </ProLayout>
  );
};

export default BasicLayout;
