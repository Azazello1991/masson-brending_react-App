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
      title: "Друк флекс/флок плівкою",
      subtitle: "Якісний друк при малих тиражах.",
      url: servicePhoto,
      key: 1,
    },
    {
      title: "Друк на Ваших матеріалах",
      subtitle: "Допомога з матеріалами.",
      url:  servicePhoto1 ,
      key: 2,
    },
    {
      title: "Друк на кераміці",
      subtitle: "Зробимо стильною вашу чашку.",
      url: servicePhoto2 ,
      key: 3,
    },
    {
      title: "Реставрація зображень",
      subtitle: "Професійна цифрова реставрація.",
      url: servicePhoto3,
      key: 4,
    },
    {
      title: "Ламінація Ваших речей",
      subtitle: "Дамо часу улюбленим речам.",
      url: servicePhoto4,
      key: 5,
    },
    {
      title: "Друк банерів",
      subtitle: "Зроби подарунок на всю стіну!",
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

export const selectSearch = (state) => state.content; // useSelector

export const { addServices } = servicesSlice.actions; // functions

export default servicesSlice.reducer;
