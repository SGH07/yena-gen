const button = document.getElementById("generatorButton")
const text = document.getElementById("generatorText")

const first = ["다이","하이","바이","어린이","고양이","아이","나이","종이","호랑이","굳이","이브이","떡볶이","원숭이","높이","가까이","깨끗이","넥타이","놀이","길이","오이","젋은이","나들이","올챙이","거북이","호랑이","살쾡이","게이"]

const last = ["나오다","나가다","나루호도","나순봉씨의3번째아들","나쁘다","나이로비","나무","나라","나누다","나누기","나서스","나타내다","나비","나머지","나뭇잎","나물","나흘","나뭇가지","나들이","나빠지다","나침반","나란히","나락","나이트","나이트클럽","나알개를활짝펴고세상을자유롭게날거야노래하며춤추는나는아름다운나비","나전칠기","나진소드","나이스"]







function generator(event) {
    event.preventDefault();

    let firstOrLast = Math.floor( ( Math.random() * 10 ))
    let randomnumberToGen = Math.floor( ( Math.random() * 100 ) )
    let genedText = ""
    console.log("firstOrLast"+firstOrLast)
    console.log("randomnumberToGen"+randomnumberToGen)






    if (firstOrLast > 5 ) {
        


        if (randomnumberToGen < first.length) {
            if (first[randomnumberToGen] === undefined) {
                generator(event)

            } else {
                console.log(randomnumberToGen)
                genedText = first[randomnumberToGen]
                
                text.innerText = genedText + "예나"
                first[randomnumberToGen] = genedText
            }


        } else {
            generator(event)
        }
        

    } else if (randomnumberToGen < last.length) {
        if (last[randomnumberToGen] === undefined) {
            generator(event)
    }else {
        console.log(randomnumberToGen)
        genedText = last[randomnumberToGen]
                
        text.innerText =  "이예" + genedText
        last[randomnumberToGen] = genedText
    }

}else {
    generator(event)
}}
