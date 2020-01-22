import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageTitle } from '../atoms/PageTitle/PageTitle'
import { StudentList } from 'components/molecules/StudentList/StudentList';
import {StudentListItem } from '../../models/StudentListItem';
import { IStudent } from 'models/Student.model';
import { FiltersModel } from 'models/Filters.model';
import Filters from 'components/atoms/Filter/Filters';
import api from 'helpers/api';
import { IPromo } from 'models/Promo';
import bg from '../assets/bg.png'


interface Props {
  students?: StudentListItem[];
}

interface State {
  students: StudentListItem[]
}

const StyledWrapper = styled.div`
  padding: 50px 10vw;
  min-height: 100vh;

  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledStudentListWrapper = styled.div`
  max-height: 700px;
  overflow-y: scroll;
`;

const StudentListView: React.FC = () => {
  const [promos, setPromos] = useState([])
  const [selectedPromos, setSelectedPromos] = useState([])
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  useEffect(() => {
    (async () => {
      const promosReq: any = await api.get.promos.all()
      const usersReq: any = await api.get.users.all()
      setPromos(promosReq)
      setUsers(usersReq)
    })()
  }, [])
  useEffect(() => {
    (async () => {
      setFilteredUsers(users
        .filter(user => selectedPromos.includes(user.promo))
        .map(dataItem => ({
          id: dataItem._id,
          firstName: dataItem.first_name,
          lastName: dataItem.last_name,
          img: dataItem.img
        }))
      )
    })()
  }, [selectedPromos])

  const selectPromos = async ({target: { value }}, id) => {
    if(!selectedPromos.includes(id)) {
      setSelectedPromos([...selectedPromos, id ])
    } else {
      setSelectedPromos(selectedPromos.filter(el => el !== id))
    }
  }

  return (
    <StyledWrapper>
      <PageTitle value={'Liste'} />
      {
      promos.map(({name, _id}) => (
        <label key={_id}>
          <input value={name} type="checkbox" onChange={e => selectPromos(e, _id)} checked={selectedPromos.includes(_id)} />
          {name}
        </label>
      ))
      }
      <StyledStudentListWrapper>
        <StudentList students={filteredUsers} />
      </StyledStudentListWrapper>
    </StyledWrapper>
  )
}

export default StudentListView
