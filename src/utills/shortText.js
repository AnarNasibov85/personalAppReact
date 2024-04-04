



// export const shortText=(text,len)=>{
// if(text.length>len){

//   return `${text.slice(0,len)}...`
// }
// return text
// }
export const shortText = (text, len) => {
    return text.length > len ? text.substring(0, len) + "..." : text;
  };
  