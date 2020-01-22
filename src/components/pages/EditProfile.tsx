import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import api from 'helpers/api'
import bg from '../assets/bg.png'


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  min-height: 100vh;

  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  form {
    max-width: 500px;
  }
`
const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  border-radius: 150px;
`

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid rgba(39, 172, 139, 0.5);
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 18px;
  width: 100%;
  `

const StyledTextarea = styled.textarea`
background: #ffffff;
min-height: 300px;
border: 1px solid rgba(39, 172, 139, 0.5);
margin-bottom: 8px;
box-sizing: border-box;
border-radius: 40px;
padding: 18px;
width: 100%;

`

const updateProfile = (id, updatedFields) => {
  api.update.user(id, updatedFields)
}


const EditProfile = () => {
  const [user, setUser] = useState([])
  const { id } = useParams()
  const [skills, setSkills] = useState([])
  const [checkedSkills, setCheckedSkills] = useState([])
  const [state, setState] = useState({})
  useEffect(() => {
    (async () => {
      const userReq = await api.get.users.byId(id)
      const skillsReq = await api.get.skills.all()
      // @ts-ignore
      setUser(userReq)
      setSkills(skillsReq)
      setCheckedSkills(skillsReq.map(skill => ({...skill, selected: false})))
    })()
  }, [])
  useEffect(() => {
    console.log('here',checkedSkills)
    setState({
      ...state,
      skills: checkedSkills
        .filter(skill => skill.selected)
        .map(skill => ({skill, rate: 5}))
    })
  }, [checkedSkills])
  const updateValue = (fieldName, e) => {
    setState({
      ...state,
      [fieldName]: e.target.value
    })
  }

  const onSkillsChange = (index) => {
    setCheckedSkills(checkedSkills.map((skill, i) => {
      if(index === i) {
        return {
          ...skill,
          selected: !skill.selected
        }
      }
      return skill
    }))
  }
  return (
    <>
    <StyledWrapper>
        <StyledImg src={user.img} />
      <form onSubmit={() => updateProfile(id, state)}>
        <StyledInput
          defaultValue={user['first_name']}
          onChange={e => updateValue('first_name', e)}
        />
        <StyledInput
          defaultValue={user['email']}
          onChange={e => updateValue('email', e)}
        />
        <StyledInput
          defaultValue={user['img']}
          onChange={e => updateValue('img', e)}
        />
        <StyledTextarea 
          onChange={e => updateValue('desc', e)}
          defaultValue={user.desc}
        />
        {
          checkedSkills.length && skills.map((skill, index) => (
            <label key={index}>
              { skill.name }
              <StyledInput
                type="checkbox"
                onChange={() => onSkillsChange(index)}
                checked={checkedSkills[index].selected}
              />
            </label>
          ))
        }
        <button type="submit">submit</button>
      </form>
    </StyledWrapper>
    </>
  )
}

export default EditProfile
