import React from 'react';

import Menu from '../../components/Menu'
import {Wrapper} from './styles'

type LayoutProps = {
  children: React.Component
}
const Layout= ({children}:LayoutProps) => {
return <Wrapper><Menu/>{children}</Wrapper>;
}

export default Layout;
