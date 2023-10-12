const Validate = () => {
  if(!localStorage.getItem('account')) {
    if(window.location.pathname === '/'){
      return;
    }else {
      window.location.href = '/';}
  }
   else {
    if(window.location.pathname === '/impulsknappen'){
      return;}
    else{
      window.location.href = '/impulsknappen';
      }
  }
};
export default Validate;




