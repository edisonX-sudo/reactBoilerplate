import React from 'react';
// @ts-ignore
import styles from './index.css';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'umi/link';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';

const menuData: MenuDataItem[] = [
  { path: '/', name: '主页', icon: <UserOutlined /> },
];

const BasicLayout: React.FC = props => {
  const location = window.location;
  const [path, setPath] = React.useState<string | undefined>(location.pathname);
  return (

    <ProLayout
      logo={<img src={require('@/assets/networking.svg')} />}
      layout={'top'}
      navTheme={'light'}
      title={'XSK_HOME'}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return <Link to={menuItemProps.path} onClick={() => {
            setPath(menuItemProps.path);
          }}>{defaultDom}</Link>;
        }
        return defaultDom;
      }}
      menuDataRender={() => menuData}
      menu={{ loading: false }}
      location={{ pathname: path }}
    >
      {props.children}
    </ProLayout>
  );
};

export default BasicLayout;
