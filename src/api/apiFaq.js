import axios from 'axios';
import querystring from 'querystring';

export default {
  requestPost(question, answer) {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/faq',
      data: querystring.stringify({
        question: question,
        answer: answer,
      }),
    })
    .then((response) => {
      console.log(response.data.id);
      return {
        id: response.data.id,
      }
    })
    .catch((error)=>{
      let errorMsgs= {};
      console.log(Object.keys(error.response.data.error));
       Object.keys(error.response.data.error).map( (name)=>{
       errorMsgs[name] = error.response.data.error[name].msg;
});
return errorMsgs;
    })
  }
}