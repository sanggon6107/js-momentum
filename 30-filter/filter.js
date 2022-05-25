myArray = [1, 2, 3, 4];

function myFilter(arg)
{
    return arg > 2;
}

const filteredArray = myArray.filter(myFilter); // filter는 인자로 들어가는 함수가 true를 리턴하는 것만 남겨둔다.

