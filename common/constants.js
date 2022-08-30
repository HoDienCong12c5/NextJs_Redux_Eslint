// import { images } from 'config/images'

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
  about:{
    path:'/Screen/About',
    as:'/about/'
  },
  contact:{
    path:'/Screen/Contact',
    as:'/contact/'
  }
}
export const Color = {
  text:'white',
  white:'rgba(255,255,255,1)',
  white1:'rgba(255,255,255,0.9)',
  grey:'rgb(25, 25, 25)',
  red:'red',
  green:'green',
  purple: 'rgba(100, 61, 167, 1)',
  blue: 'blue',
  orange: 'rgba(255, 153, 0, 1)',
  legendary:'linear-gradient(269.09deg, #104AFB 0.78%, #00FFD1 99.53%)'
}




export default ()=>NULL_ADDRESS