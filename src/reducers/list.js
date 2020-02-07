import { ADD, DELETE } from '../constants/list'

const INITIAL_STATE =['吃饭','睡觉','看动漫']

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      let addlist = state;
      addlist.push(action.payload)
      return [...addlist]
    case DELETE:
      let deletelist = state.filter((item,index)=>{
          if(action.payload === index){
            return false
          }
          return true
      })
      return [...deletelist]
    default:
      return state
  }
}
