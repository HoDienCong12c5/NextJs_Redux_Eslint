import axios from 'axios'
const BASE_URL = ''
const UserServices = {
  getInfor: async (req, res) => {
    const url = `${BASE_URL}/api/user/getInfor`
    const data = await axios({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.headers.authorization
      },
      data: {
        id: req.params.id
      }
    })
  }
}
export default UserServices
