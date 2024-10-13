import React from 'react'
import { Link } from "react-router-dom";

const BreadCrumbsGallery = () => {
  return (
    <div class="bread-crumbs">
      <div class="container bread-crumbs__flexbox">
        <Link class="bread-crumbs__item" to="/">
          На головну
        </Link>
        <a class="bread-crumbs__item">Каталог</a>
      </div>
    </div>
  )
}

export default BreadCrumbsGallery