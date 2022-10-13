// import { images } from 'config/images'

const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const RELOAD_MY_NFT = 'RELOAD_MY_NFT'
const messages={
  NamePage : {
    home: 'Trang chủ',
    profile: 'Trang cá nhân',
    about: 'Thông tin',
    contact: 'Liên Hệ',
    productDetails: 'Chi tiết sản phẩm',
    myCart:'Giỏ hàng'
  },
  Button : {
    more:'Xem thêm',
    details:'Chi tiết',
    buy: 'Mua ngay',
    cancel: 'Thoát',
    contact: 'Liên hệ',
    send: 'Gửi',
    submit:'Xác nhận',
    back:'Quay lại',
    detail:'Chi tiết',
    addCart: 'Thêm vào giỏ hàng'
  },
  Title : {
    address:'Địa chỉ',
    numberPhone:'SDT',
    aboutContact:'Thông tin liên hệ',
    product:{
      product1:'Loại 1',
      product2:'Loại 2',
      product3:'Loại 3',
      product4:'Loại 4'
    },
    price: 'Giá',
    nameProduct: 'Tên',
    oder: 'Đặt hàng',
    cart: 'Giỏ hàng',
    cancel: 'Thoát',
    call:'Gọi',
    message:'Tin nhắn',
    description:'Mô tả',
    details:'CHi tiết',
    save:'Lưu',
    total:'Tổng',
    content:'Liên hệ',
    element:'Thành phần',
    origin:'Nơi sản xuất',
    flavoring:'Hương vị',
    solugun:'Cà phê ngon nhất, tốt nhất cho bạn'
  },
  Des : {
    element: '\n Với hàm lượng từ các loại Robusta, Arabica, Cherry',
    origin: '100% cà phê nguyên chất từ gia lai',
    flavoring:'Với hơng vị thơm đặc trưng coffe Gia Lai đám say người uống',
    solugun:'Gia Lai từ xưa là nơi nổi tiếng về cà phê cũng như trải qua 50 năm kinh nghiệm trong lĩnh vực trồng và sản xuất cà phê chúng tôi tự hào là nơi phát triển cà phê tốt nhất và ngon nhất. Từ ưu điểm đó chúng tôi muốn đem những hương vị cà phê và chất lượng tốt nhất có thể đến với bạn và ra thế giới'
  },
  Warning : {
    enoughPrice: 'Không đủ tiền',
    sureDelete: 'Bạn có mún xóa',
    buy: 'Mua',
    cart: 'Cart',
    cancel: 'Cancel',
    call:'Call',
    message:'Message',
    description:'Description',
    details:'Details'
  },
  Error:{

  }
}
export const NamePage = {
  home: 'Trang chủ',
  profile: 'Trang cá nhân',
  about: 'Thông tin',
  contact: 'Liên Hệ',
  productDetails: 'Chi tiết sản phẩm',
  myCart:'Giỏ hàng'
}
export const Button = {
  buy: 'Mua ngay',
  cancel: 'Thoát',
  contact: 'Liên hệ',
  send: 'Gửi',
  submit:'Xác nhận',
  back:'Quay lại',
  detail:'Chi tiết'
}
export const Title = {
  product:{
    product1:'Loại 1',
    product2:'Loại 2',
    product3:'Loại 3',
    product4:'Loại 4'
  },
  price: 'Giá',
  nameProduct: 'Tên',
  oder: 'Đặt hàng',
  cart: 'Giỏ hàng',
  cancel: 'Thoát',
  call:'Gọi',
  message:'Tin nhắn',
  description:'Mô tả',
  details:'CHi tiết',
  save:'Lưu',
  total:'Tổng',
  content:'Liên hệ',
  element:'Thành phần',
  origin:'Nơi sản xuất',
  flavoring:'Hương vị',
  solugun:'Cà phê ngon nhất, tốt nhất cho bạn'
}
export const Des = {
  element: '\n Với hàm lượng từ các loại Robusta, Arabica, Cherry',
  origin: '100% cà phê nguyên chất từ gia lai',
  flavoring:'Với hơng vị thơm đặc trưng coffe Gia Lai đám say người uống',
  solugun:'Gia Lai từ xưa là nơi nổi tiếng về cà phê cũng như trải qua 50 năm kinh nghiệm trong lĩnh vực trồng và sản xuất cà phê chúng tôi tự hào là nơi phát triển cà phê tốt nhất và ngon nhất. Từ ưu điểm đó chúng tôi muốn đem những hương vị cà phê và chất lượng tốt nhất có thể đến với bạn và ra thế giới'
}
export const Warning = {
  enoughPrice: 'Không đủ tiền',
  sureDelete: 'Bạn có mún xóa',
  buy: 'Mua',
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
  productDetails:{
    path:'/Screen/ProductDetail',
    as:'/product-detail/'
  },
  contact:{
    path:'/Screen/Contact',
    as:'/contact'
  },
  myCart:{
    path:'/Screen/MyCart',
    as:'/my-cart'
  },
  CvCEO:{
    path:'/Screen/CvCEO',
    as:'/Cv-Ceo-Founder/'
  },
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
  legendary:'linear-gradient(269.09deg, #104AFB 0.78%, #00FFD1 99.53%)',
  black:'black',
  bgrMain:'rgb(240,230,222)',
  chocolate:'#d2691e'
}

export default messages