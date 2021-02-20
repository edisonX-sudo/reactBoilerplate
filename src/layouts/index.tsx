import React from 'react';
// @ts-ignore
import styles from './index.css';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'umi/link';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';

const menuData: MenuDataItem[] = [
  { path: '/', name: 'm1', icon: <LikeOutlined /> },
  { path: '/base/form', name: 'm2', icon: <UserOutlined /> },
  { path: '/base/inner', name: 'm3', icon: <UserOutlined /> },
];

const BasicLayout: React.FC = props => {
  const location = window.location;
  const [path, setPath] = React.useState<string | undefined>(location.pathname);
  return (
    <ProLayout
      logo={<img src={'https://flink.apache.org/img/flink-header-logo.svg'}/>}
      layout={'top'}
      navTheme={'light'}
      title={'see_see_title'}
      menuItemRender={(menuItemProps, defaultDom) => {
        console.log(menuItemProps, defaultDom, location);
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
