import axios from 'axios'
import { IStudent } from 'models/Student.model'
import { ISkill } from 'models/Skill'
import { IPromo } from 'models/Promo'

const baseUrl = 'http://localhost:8081/api' || process.env.REACT_APP_API_URL

const getData = async (endpoint: String) => {
  const response = await axios.get(`${baseUrl + endpoint}`)
  return await response.data
}

const postData = async (endpoint: String, data: Object) => {
  const req = await axios.post(`${baseUrl + endpoint}`)
  return await req.data
}

export const getUsers = async (): Promise<IStudent[]> => await getData('/user')
export const getUserById = async (id: String): Promise<IStudent> => await getData(`/user/${id}`)

export const createUser = async (user: IStudent, promoId: String) => {
  return postData('/user', {
    ...user,
    promo: promoId
  })
}

export const getSkills = async (): Promise<ISkill[]> => await getData('/skill')

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
    user: null
  }
}

export default api