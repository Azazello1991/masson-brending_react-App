import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreadCrumbsCart = () => {
  const { t } = useTranslation();

  return (
    <div className="bread-crumbs">
      <div className="container bread-crumbs__flexbox">
        <Link className="bread-crumbs__item" to="/">
          {t('cart.breadcrumbs.home')}
        </Link>
        <Link className="bread-crumbs__item" to={'/gallery'}>
          {t('cart.breadcrumbs.gallery')}
        </Link>
        <a className="bread-crumbs__item">{t('cart.breadcrumbs.cart')}</a>
      </div>
    </div>
  )
}

export default BreadCrumbsCart