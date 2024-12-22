const password_show_hide_btn=document.getElementById('password_show_hide_btn');
const input_password_fill=document.getElementById('password_input');

password_show_hide_btn.addEventListener('click',()=>{
    console.log("hellwo world");
    
if(input_password_fill.type =="password"){
    input_password_fill.type="text"
    password_show_hide_btn.src ="../IMG/show.png"
}else{
    input_password_fill.type = "password";
    password_show_hide_btn.src ="../IMG/hide.png"

}
})
