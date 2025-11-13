//all api calls

import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//1.resume add api-called by userinput,when finish btn clicked
export const addResumeAPI=async(resume)=>{
    return  await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
//2.get resume api-called from viewresume,when page load(),inside useeffect() hook
export const getResumeAPI = async(id) => {
    return  await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}
//3.update resume api
export const updateResumeAPI = async(id,resume) => {
    return  await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}
//4.add history
export const addHistoryAPI = async(history) => {
    return  await commonAPI(`${ServerURL}/history`,"POST",history)
}
//5.getHistoryAPI-called from istory componennt,when page load(),inside useeffect hook
export const getHistoryAPI=async()=>{
    return await commonAPI(`${ServerURL}/history`,"GET",{})
}
//6.remove histroy api
export const removeHistoryAPI= async(id)=>{
    return await commonAPI(`${ServerURL}/history/${id}`,"DELETE",{})
}