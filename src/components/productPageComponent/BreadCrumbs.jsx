import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreadCrumbs = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="bread-crumbs">
      <div className="container bread-crumbs__flexbox">
        <Link className="bread-crumbs__item" to="/">
          {t("productPage.breadcrumbs.home")}
        </Link>
        <Link className="bread-crumbs__item" to={"/gallery"}>
          {t("productPage.breadcrumbs.gallery")}
        </Link>
        <a className="bread-crumbs__item">{title}</a>
      </div>
    </div>
  );
};

export default BreadCrumbs;
