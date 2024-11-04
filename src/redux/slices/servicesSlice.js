import { createSlice } from "@reduxjs/toolkit";
import servicePhoto from '../../images/services/field.webp'
import servicePhoto1 from '../../images/services/bear.webp'
import servicePhoto2 from '../../images/services/cap.webp'
import servicePhoto3 from '../../images/services/old_photo.webp'
import servicePhoto4 from '../../images/services/printer.webp'
import servicePhoto5 from '../../images/services/banner.webp'

const initialState = {
  content: [
    {
      title: "about.cards.card_1.title",
      subtitle: "about.cards.card_2.description",
      url: servicePhoto,
      key: 1,
    },
    {
      title: "about.cards.card_2.title",
      subtitle: "about.cards.card_2.description",
      url:  servicePhoto1 ,
      key: 2,
    },
    {
      title: "about.cards.card_3.title",
      subtitle: "about.cards.card_3.description",
      url: servicePhoto2 ,
      key: 3,
    },
    {
      title: "about.cards.card_4.title",
      subtitle: "about.cards.card_4.description",
      url: servicePhoto3,
      key: 4,
    },
    {
      title: "about.cards.card_5.title",
      subtitle: "about.cards.card_5.description",
      url: servicePhoto4,
      key: 5,
    },
    {
      title: "about.cards.card_6.title",
      subtitle: "about.cards.card_6.description",
      url: servicePhoto5,
      key: 6,
    },
  ],
};

export const servicesSlice = createSlice({
  name: "services",
  initialState: initialState,
  reducers: {
    addServices(state, action) {},
  },
});

export const selectServices = (state) => state.content; // useSelector

export const { addServices } = servicesSlice.actions; // functions

export default servicesSlice.reducer;
