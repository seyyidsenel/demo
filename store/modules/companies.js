


export const state = () => ({

  activeForm : [], // active companies form'
  activeName: null, // active companies name'

});
export const mutations = {

  SET_COMPANIES_FORM(state,form){
    state.activeForm = form;
  },
  SET_ACTIVE_COMPANIES_NAME(state,name){
    state.activeName = name;
  },

};





