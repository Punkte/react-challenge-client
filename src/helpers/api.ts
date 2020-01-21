import axios from 'axios'
import { IStudent } from 'models/Student.model'
import { ISkill, ISkillUser } from 'models/Skill'
import { IPromo } from 'models/Promo'

const baseUrl = 'http://51.158.109.232:8081/api' || process.env.REACT_APP_API_URL

const getData = async (endpoint: String) => {
  const response = await axios.get(`${baseUrl + endpoint}`)
  return await response.data
}

const postData = async (endpoint: String, data: Object) => {
  const req = await axios.post(`${baseUrl + endpoint}`, data)
  return await req.data
}

const updateData = async (endpoint: String, data: Object) => {
  const req = await axios.put(`${baseUrl + endpoint}`, data)
  return await req.data
}

const deleteData = async (endpoint: String) => {
  const req = await axios.delete(`${baseUrl + endpoint}`)
  return await req.data
}

export const getUsers = async (): Promise<IStudent[]> => await getData('/user')
export const getUserById = async (id: String): Promise<IStudent> => await getData(`/user/${id}`)
export const createUser = async (user: IStudent) => await postData('/user', user)
/**
 * Update a user by ID
 * ? To update a user's skills use the ISkillUser[] Interface
 * @param id 
 * @param user 
 */
export const updateUserById = async (id: String, user: any) => await updateData(`/user/${id}`, user)
export const deleteUserById = async (id: String, user: any) => await deleteData(`/user/${id}`)


export const getSkills = async (): Promise<ISkill[]> => await getData('/skill')
export const getSkillById = async (id: String): Promise<ISkill> => await getData(`/skill/${id}`)

export const getPromos = async (): Promise<IPromo[]> => await getData('/promo')



const api = {
  get: {
    users: {
      all: getUsers,
      byId: getUserById,
    },
    skills: {
      all: getSkills,
    },
    promos: {
      all: getPromos,
    }
  },
  create: {
    user: createUser,
  },
  update: {
    user: updateUserById
  }
}

export default api