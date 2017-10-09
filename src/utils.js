export function scroll(element,callback){
  let timer;
  element.addEventListener('scroll',()=>{
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(()=>{
      let winHeight = element.clientHeight;
      let contentHeight = element.scrollHeight;
      let scrollTop = element.scrollTop;
      if(winHeight+scrollTop+10>contentHeight){
        callback();
      }
    },200);
  });
}