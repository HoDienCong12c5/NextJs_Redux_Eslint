import { images } from 'config/images'

const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const RELOAD_MY_NFT = 'RELOAD_MY_NFT'

export const NamePage = {
  home: 'Home',
  profile: 'Profile',
  about: 'About',
  contact: 'Contact',
  productDetails: 'Product Details'
}
export const Title = {
  price: 'Price',
  nameProduct: 'Name',
  oder: 'Oder',
  cart: 'Cart',
  cancel: 'Cancel',
  call:'Call',
  message:'Message',
  description:'Description',
  details:'Details',
  save:'Save',
  total:'Total',
  content:'Content'
}
export const Warning = {
  enoughPrice: 'Enough Price',
  sureDelete: 'Sure Delete',
  buy: 'Buy',
  cart: 'Cart',
  cancel: 'Cancel',
  call:'Call',
  message:'Message',
  description:'Description',
  details:'Details'
}
export const RoutePage = {
  home:{
    path:'/Screen/Home',
    as:'/',
    orderAs:'/Home'
  },
  proFile:{
    path:'/Screen/ProfileScreen',
    as:'/profile/'
  },
  proFile:{
    path:'/Screen/ProfileScreen',
    as:'/profile/'
  }
}



export default ()=>NULL_ADDRESS