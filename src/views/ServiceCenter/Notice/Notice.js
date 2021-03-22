import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
  CFormGroup,
  CInputCheckbox,
  CLabel
} from '@coreui/react'
import BoardData from '../../users/BoardData'

const Notice = () => {
    const fields = ['checkbox', 'title','content', 'date', 'writer']
   
    return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
                공지사항
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={BoardData}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'checkbox':
                  (item)=>(
                    <td>
                        
                        <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox id="checkbox3" name="checkbox3" value="option3" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3"></CLabel>
                    </CFormGroup>
                    </td>
                  )

              }}
            />
            
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        <CButton className="btn-facebook btn-brand mr-1 mb-1">글쓰기</CButton>
        <CButton className="btn-xing btn-brand mr-1 mb-1">수정</CButton>
        <CButton className="btn-youtube btn-brand mr-1 mb-1">삭제</CButton>
        
    </>
  )
}

export default Notice
