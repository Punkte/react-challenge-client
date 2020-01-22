import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from 'helpers/api'
import styled from 'styled-components'

import bg from '../assets/bg.png'

const StyledWrapper = styled.div`
  padding-top: 60px;
  min-height: 100vh;

  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  border-radius: 150px;
`

const StyledCaption = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.h3`
  padding-bottom: 8px;

  border-bottom: 1px solid #27AC8B;

  font-size: 20px;
  font-weight: normal;
  line-height: 27px;
  text-align: left;
`

const StyledUserInfo = styled.section`
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  
  width: 90vw;
  
  `
const StyledText = styled.section`
  text-align: left;
  font-size: 14px;
  line-height: 21px;
`

const StyledListItemContainer = styled.div`
  display: flex;

  text-align: left;

  & div {
    padding: 4px 8px;
    margin-left: 4px;

    background: #4E4E56;
    border-radius: 40px;

    color: #fff;
  }
`



const UserProfile = () => {
  const [user, setUser] = useState([])
  const { id } = useParams()
  useEffect(() => {
    (async () => {
      const userReq = await api.get.users.byId(id)
      // @ts-ignore
      setUser(userReq)
    })()
  }, [])
  return (
    <StyledWrapper>
      <StyledCaption>
        <StyledImg src={user.img} />
        <h2>
          { user['first_name'] }<br/>
          { user['last_name'] }
        </h2>
      </StyledCaption>
      <StyledUserInfo>
        <StyledTitle>Cursus</StyledTitle>
          { !!user.desc && <StyledText>{user.desc}</StyledText> }
        <StyledTitle>E-mail</StyledTitle>
          { !!user.email && <StyledText>{user.email}</StyledText> }
        <StyledTitle>Compétences</StyledTitle>
        <StyledListItemContainer>
          { user.skills && user.skills.map((s, i) => (
            <div key={i}>
              {s.skill.name}
            </div>
          )) }
        </StyledListItemContainer>
      </StyledUserInfo>
    </StyledWrapper>
  )
}

export default UserProfile