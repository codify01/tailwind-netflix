let acc = document.getElementsByClassName("item");
let index

for (let index = 0; index < acc.length; index++) {
    acc[index].addEventListener('click', (e)=> {
       e.currentTarget.closest(".item").classList.toggle('active');
    })
}



    tailwind.config = {
      theme: {
        extend: {
            spacing: {
                '18': '4.5rem',
            }
        }
      }
    }