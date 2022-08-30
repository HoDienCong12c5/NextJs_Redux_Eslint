import styled from 'styled-components'
import {Modal} from 'antd'
import {Color} from 'common/constants'
const ModalBase = styled(Modal)`
    .ant-modal{
        color:${Color.white} !important ;
        .ant-modal-content{
            background:  ${Color.white} !important;
            border:1px solid ${Color.grey} !important;
        }
    }
`
export default ModalBase