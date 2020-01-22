import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import api from 'helpers/api'
import bg from '../assets/bg.png'
import { ISkillUser } from 'models/Skill'


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
  background-color: ${props => props.checked ? '#f00': ''};

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

const StyledListContainer = styled.div`
  display: flex;
  
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    padding: 4px 8px;
    flex-basis: 0;
    flex: 1 1 0;
    flex-wrap: wrap;
    
    border-radius: 3px;
    border: solid 1px #79DCBC;

    text-align: left;
    cursor: pointer;
    &--selected {
      color: #fff;
      background: linear-gradient(94.71deg, #79DCBC -17%, #2FB992 95.97%);
    }

    input {
      -webkit-appearance: none;
     -moz-appearance: none;
    }
  }
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
      setCheckedSkills(skillsReq.map(skill => ({
        ...skill,
        //@ts-ignore
        selected:  userReq.skills.map((el: ISkillUser) => el.skill.name).includes(skill.name)
      })))
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
          defaultValue={user['desc']}
        />
        <StyledListContainer>
        {
          checkedSkills.length && skills.map((skill, index) => (
            <label key={index} className={checkedSkills[index].selected ? 'label label--selected' : 'label'}>
              { skill.name }
              <input
                type="checkbox"
                onChange={() => onSkillsChange(index)}
                checked={checkedSkills[index].selected}
              />
            </label>
          ))
        }
        </StyledListContainer>
        <button type="submit">submit</button>
      </form>
    </StyledWrapper>
    </>
  )
}

export default EditProfile
