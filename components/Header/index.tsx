import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import { HeaderRoot } from './styles';

const Root = styled(HeaderRoot)`
  .back-block,
  .header-title,
  .action-block {
    flex-grow: 1;
  }
  .back-icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #007aff;
    span {
      margin-left: -5px;
      font-size: 1rem;
      font-weight: 400;
    }
  }
  .header-title {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  .action-block {
    justify-content: flex-end;
    text-align: right;
    font-size: 1rem;
    font-weight: 400;
    color: #007aff;
  }
`;

interface props {
  backTo: {
    href: string;
    name: string;
  };
  title: string;
  actionComponent: React.ReactNode;
}
const Header: React.FC<props> = ({
  backTo,
  title,
  actionComponent,
  ...props
}) => {
  return (
    <Root {...props}>
      <div className="header-content">
        <div className="back-block">
          <Link href={backTo.href}>
            <a className="back-icon">
              <ArrowBackIos />
              <span>{backTo.name}</span>
            </a>
          </Link>
        </div>
        <h1 className="header-title">{title}</h1>
        <div className="action-block">{actionComponent}</div>
      </div>
    </Root>
  );
};

export default Header;
