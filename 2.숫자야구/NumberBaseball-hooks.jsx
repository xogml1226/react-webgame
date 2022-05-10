import React, { useState, memo } from 'react';
import Try from './Try';

// 숫자 4개를 겹치치 않고 랜덤하게 뽑는 함수
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = memo(() => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries) => {
                return [...prevTries, {try: value, result: '홈런!'}]
            })
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const anwerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9) {  // 10번 이상 틀렸을 때
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 입니다.`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {    // 10번 이하로 틀렸을 때
                for(let i = 0; i < 4; i++) {
                    if(anwerArray[i] === answer[i]) {
                        strike += 1;
                    } else if(answer.includes(anwerArray[i])) {
                        ball += 1;
                    }
                }
                
                setTries((prevTries) => {
                    return [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼`}]
                });
                setValue('');
            }
        };
    };

    const onChangeInput = (e) => {
        console.log(answer);
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{ result }</h1>
            <form onSubmit={ onSubmitForm }>
                <input maxLength={4} value={ value } onChange={ onChangeInput } />
                <button>입력</button>
            </form>
            <div>시도 : { tries.length }</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도 :`} tryInfo = {v} />
                    );
                })}
            </ul>
        </>
    );
});



export default NumberBaseball;  // import NumberBaseball