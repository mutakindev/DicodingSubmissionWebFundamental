let menu = document.getElementById('menu');
let links = document.querySelectorAll('.link');
menu.addEventListener('click',function(){
    document.querySelector('#nav').classList.toggle('active');
    menu.classList.toggle('change');
});


links.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('#nav').classList.toggle('active');
        menu.classList.toggle('change');
    });
});



// biodata

let biodata = 
    {
        'Name' : 'Mutakin',
        'Age' : 18,
        'Phone' : '+62 8382968990',
        'Email' : 'mutakin.ind@gmail.com',
        'Skills ' : ['HTML','CSS','JavaScript','Bootstrap','PHP','CODEIGNITER']
    };


let table = document.querySelector('#bio');
let output = '';


let fields = Object.keys(biodata);
let values = Object.values(biodata);

fields.forEach((field,index) => {
        output += '<tr><td> ' + field + ' </td> <td class="right"> ' + values[index] + ' </td> </tr>';
});



document.querySelector('#bio').innerHTML = output;

