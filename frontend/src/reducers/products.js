import { createSlice } from "@reduxjs/toolkit";

// const productData = [
//   { "_id": { "$oid": "5ed611a410b33c002372376b" }, "name": "finaste2", "price": 550, "description": "fina blommor", "imageUrl": "https://dl.dropboxusercontent.com/s/sdq16xthwcn4gph/mediumBukett1.jpg?dl=0", "__v": 0 },
//   { "_id": { "$oid": "5ed63b8f4ff4e40023fbf1d9" }, "name": "studentblomma", "price": 750, "description": "fina sommarblommor", "imageUrl": "https://dl.dropboxusercontent.com/s/sdq16xthwcn4gph/mediumBukett1.jpg?dl=0", "__v": 0 },
//   { "_id": { "$oid": "5ed63c824ff4e40023fbf1da" }, "name": "Pioner", "price": 450, "description": "fina rosa pioneer", "imageUrl": "https://dl.dropboxusercontent.com/s/sdq16xthwcn4gph/mediumBukett1.jpg?dl=0", "__v": 0 }
// ]

//https://bouquetdb.herokuapp.com/bouquets
//(osäker på om denna är rätt, behöver jag skicka in något mer? så att den får tillgång till all data.  )

// const initialState = {
//   productData: {
//     _id: "",
//     name: "",
//     price: "",
//     description: "",
//     image_URL: ""
//   }
// }

const initialState = {
  productData: {
    _id: null,
    name: null,
    price: 0,
    description: null,
    image_URL: null,
  }
}

export const products = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProduct: (state, action) => {
      const { product } = action.payload;
      state.productdata.product = product;
    }
  },
  setErrorMessage: (state, action) => {
    const { errorMessage } = action.payload;
    state.products.errorMessage = errorMessage;
  }
})

export const bouquets = createSlice({
  name: "bouquets",
  initialState: initialState,
  reducers: {
    setBouquet: (state, action) => {
      const { bouquet } = action.payload;
      state.productdata.bouquet = bouquet;
    }
  },
  setErrorMessage: (state, action) => {
    const { errorMessage } = action.payload;
    state.products.errorMessage = errorMessage;
  }
})


// //Thunk (osäker på om denna är rätt, behöver jag skicka in något mer? )
// export const allBouquets = (name, price) => {
//   const FLOWER_URL = "https://bouquetdb.herokuapp.com/bouquets"
//   return (dispatch) => {
//     fetch(FLOWER_URL, {
//       method: "GET",
//     })
//       .then((res) => {
//         if (res.ok /* if 200, 201, 204 */) {
//           return res.json();
//         }
//         throw 'Could not show any products, please refresh page.';
//       })
//       .then((json) => {
//         dispatch(
//           products.actions.setBouquet({ setBouquet: JSON.stringify(json) }));
//       })
//       .catch((err) => {

//         dispatch(products.actions.setErrorMessage({ errorMessage: err }));
//       }); //401
//   };
// };


