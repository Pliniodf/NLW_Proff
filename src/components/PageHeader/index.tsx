import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'

import './styles.css'

interface PageHeaderProps {
  title: string;
  children: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Voltar" />
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
        </div>

        {props.children}
      </header>
  )
}

export default PageHeader;