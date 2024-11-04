import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topItems: [
    {
      id: 0,
      category: "mix gallery__item category-all category-cap",
      price: '199',
      url: 'https://images.prom.ua/3919192607_w640_h640_3919192607.jpg',
      rating: 4.5,
    },
    {
      id: 1,
      category: "mix gallery__item category-all category-cap",
      price: '230',
      url: 'https://images.prom.ua/4367230367_chashka-330-ml.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      category: "mix gallery__item category-all category-t-shirt category-sweater",
      price: '190',
      url: 'https://etno-city.com.ua/content/images/15/443x480l50nn0/zhinocha-futbolka-z-printom-trizub-vishivanka-zhovta-30078309089431.jpg',
      rating: 4,
    },
    {
      id: 3,
      category: "mix gallery__item category-all category-sweater",
      price: '230',
      url: 'https://st3.depositphotos.com/1026266/15588/i/1600/depositphotos_155885358-stock-photo-criminal-offender-man.jpg',
      rating: 5,
    },
    {
      id: 4,
      category: "mix gallery__item category-all category-sweater",
      price: '999',
      url: 'https://art-stend.com.ua/content/images/7/480x480l50nn0/baner-na-pershe-veresnia-2kh2m-68538180819976.jpg',
      rating: 5,
    },
    {
      id: 5,
      category: "mix gallery__item category-all category-cap category-sweater",
      price: '799',
      url: 'https://vpm.rv.ua/sites/default/files/field/images/categori/laminaciya-koktelnih-kart.jpg',
      rating: 5,
    },
    {
      id: 6,
      category: "mix gallery__item category-all category-cap category-sweater",
      price: '2099',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysKk9RALuqykB1UM9k8U-4NQIiFh8CPN78w&s',
      rating: 4.5,
    },
    {
      id: 7,
      category: "mix gallery__item category-all category-cap category-sweater",
      price: '260',
      url: 'https://zorrov.com/uploads/products/403807/64182a00a7e36.jpg',
      rating: 5,
    },
  ],

  topCategory: [
    {
      nameKey: "top.category.all",
      filter: 'all',
      id: 0,
    },
    {
      nameKey: "top.category.lamination",
      filter: '.category-cap',
      id: 1,
    },
    {
      nameKey: "top.category.clothing",
      filter: '.category-sweater',
      id: 2,
    },
    {
      nameKey: "top.category.mugs",
      filter: '.category-t-shirt',
      id: 3,
    },
    {
      nameKey: "top.category.print",
      filter: '.category-t-shirt',
      id: 4,
    },
    {
      nameKey: "top.category.banners",
      filter: '.category-t-shirt',
      id: 5,
    },
    {
      nameKey: "top.category.photo",
      filter: '.category-t-shirt',
      id: 7,
    },
  ],
  activeId: 0,
};

export const topSlice = createSlice({
  name: "top",
  initialState: initialState,

  reducers: {
    addId(state, action) {
      state.activeId = action.payload;
    },
  },
});

export const selectTopItems = (state) => state.topItems; // useSelector

export const { addId } = topSlice.actions;

export default topSlice.reducer;

