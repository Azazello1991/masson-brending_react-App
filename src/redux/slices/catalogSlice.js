import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalogItems: [
    {
      id: 0,
      title: 'Футболка Чоловіча',
      description: 'Еко матеріали',
      url: 'https://shop.navi.gg/files/resized/products/navi41374.400x400.png.webp',
    },
    {
      id: 1,
      title: 'Футболка Жіноча',
      description: 'Еко матеріали',
      url: 'https://cdn.27.ua/sc--media--prod/default/d3/be/82/d3be82a6-e132-4630-adfb-53fd3874547c.jpg',
    },
    {
      id: 2,
      title: 'Худі',
      description: 'Еко матеріали',
      url: 'https://shop.navi.gg/files/resized/products/navi40884.650x622.png',
    },
    {
      id: 3,
      title: 'Чашки з мемасами',
      description: 'Еко матеріали',
      url: 'https://images.prom.ua/4367230367_chashka-330-ml.jpg',
    },
    {
      id: 4,
      title: 'Рюкзаки',
      description: 'Еко матеріали',
      url: 'https://mad-btw.com/wp-content/uploads/2021/01/Flip-2-brend.jpg',
    },
    {
      id: 5,
      title: 'Сумочки',
      description: 'Еко матеріали',
      url: 'https://promohit.com.ua/image/cache/catalog/product/PRINTU/ekosymki/gus-w-700x700.jpg',
    },
    {
      id: 6,
      title: 'Світшоти',
      description: 'Еко матеріали',
      url: 'https://nusho.com.ua/photos/elem/f/20190918211914_607_.jpg',
    },
    {
      id: 7,
      title: 'Желетки чоловічі',
      description: 'Еко матеріали',
      url: 'https://shop.navi.gg/files/resized/products/navi77606-edit.400x400.png.webp',
    },
    {
      id: 8,
      title: 'Желетки жіночі',
      description: 'Еко матеріали',
      url: 'https://omixcdn.com/img/catalog/zhilet-zhinochiy-shell-tm-floyd-5003241-0.jpg',
    },
  ],
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialState,

  reducers: {
    addId(state, action) {
      
    },
  },
});

export const selectCatalogItems = (state) => state.catalogItems; // useSelector

/* export const { addId } = topSlice.actions */;

export default catalogSlice.reducer;

