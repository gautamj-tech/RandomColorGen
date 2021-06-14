export default function setBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let hex="#" + randomColor;
    return hex;
  }
 

