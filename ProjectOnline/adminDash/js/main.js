const postsLis=document.querySelector('.posts-list')

const url='http://localhost:7000/admin/register';

fetch(url)
.then(res =>res.json())
.then(data=>{
    data.forEach(post => {
        
    });
})