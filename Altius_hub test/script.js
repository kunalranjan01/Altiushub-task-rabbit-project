document.getElementById('registerForm').addEventListener('submit',async(e)=>{
e.preventDefault();
const formData=new FormData(e.target);
const data=Object.fromEntries(formData);
const response=await fetch('https://localhost:5000/api/auth/register',{
    method='POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data),
}); 
if( response.ok){
    alert('User registered');
}
else{
    alert('Error registering user');
}
});