import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  LaptopOutlined,
  UserOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <LaptopOutlined />),
  getItem('Option 2', '2', <LaptopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <LaptopOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <LaptopOutlined />),
];

type SiderPageType = {
  collapsed: boolean;
  onCollapsed: () => void;
};

const SiderPage = ({ collapsed = false, onCollapsed }: SiderPageType) => {
  return (
    <Sider
      width={256}
      theme={'dark'}
      breakpoint="lg"
      trigger={null}
      // onBreakpoint={!isMobile && onCollapseChange}
      className="sider-page-root"
      collapsible
      collapsed={collapsed}
    >
      <div className="sos-logo-cs">
        <div className="sos-logo">
          {/* <img alt="logo" src={config.logoPath} /> */}
          <h1>SOS</h1>
        </div>
      </div>

      <div className="menuContainer-root">
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </div>

      <div className="ant-layout-sider-trigger" onClick={onCollapsed}>
        <span role="img" aria-label="left" className="anticon anticon-left">
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </span>
      </div>
    </Sider>
  );
};
export default SiderPage;
