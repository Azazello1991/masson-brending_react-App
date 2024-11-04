import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreadCrumbsGallery = () => {
  const { t } = useTranslation();
  return (
    <div className="bread-crumbs">
      <div className="container bread-crumbs__flexbox">
        <Link className="bread-crumbs__item" to="/">
          {t('gallery.breadcrumbs.home')}
        </Link>
        <a className="bread-crumbs__item">{t('gallery.breadcrumbs.gallery')}</a>
      </div>
    </div>
  )
}

export default BreadCrumbsGallery