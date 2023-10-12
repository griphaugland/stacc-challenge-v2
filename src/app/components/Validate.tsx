const Validate = () => {
  console.log(window.location.pathname)
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


// Sjekk om accountLogged finnes
// Om accountlogged finnes skal det sendes til impulsknappen
// Om accountlogged ikke finnes skal det sendes til access


// sjekk om account er tilstede og har en verdi i localstorage
// om ja --> redirect til impulsknappen og sett accountLogged til true
// om nei --> redirect til access og sett accountLogged til false


/*
if(!localStorage.getItem('account')) {
  window.href = '/access';
else {
   window.href = '/impulsknappen';
}
*/


