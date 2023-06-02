const doneBtn = document.querySelector('#doneButton'); // Check! 버튼 불러오는거
const listLi = document.querySelector('#list'); // 어디 박스에 넣을지
const inputValue = document.querySelector('#inputV'); // 어떤거 입력하는지 받을거

doneBtn.addEventListener('click', () => { // Check! 버튼을 누르거나 엔터키 쳤을 때
    if (inputValue.value) {  // 입력한 값이 있는가? (입력값 없는데 저장하면 안되니까) 
        listLi.innerHTML += `<li class="listL"> <input type="checkbox" class="listB">` + inputValue.value + '</li>';
        inputValue.value = '';
    }

    setInterval(() => {
        const checked = document.querySelectorAll('.listB')
        checked.forEach((a ,i) => {
            if (a.checked) {
                a.parentNode.style.textDecoration = 'line-through';
            } else {
                a.parentNode.style.textDecoration = 'none';
            }
        })
    }, 20);
});

doneBtn.addEventListener('keypress', (e) => { // Check! 버튼을 누르거나 엔터키 쳤을 때
    if (inputValue.value && e.key === 'Enter') {  // 입력한 값이 있는가? (입력값 없는데 저장하면 안되니까) 
        listLi.innerHTML += `<li class="listL"> <input type="checkbox" class="listB">` + inputValue.value + '</li>';
        inputValue.value = ''; }}
        )