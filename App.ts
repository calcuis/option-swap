import { useEffect, useState } from 'react';

function App() {

  const [item, setItem] = useState<any>([]);
  const [swap, setSwap] = useState(0); //For #0

  const pickItem = async() => {
    try {
      if (!item.d) {
        setSwap(Math.floor(Math.random()*4)); //For #1|#2++(3 only & w/o'All of the Above')
      } else if (item.free&&item.d) {
        setSwap(Math.floor(Math.random()*(7-4+1)+4)); //For #2+(4 only & w/o'All of the Above')
      } else {
        setSwap(Math.floor(Math.random()*7)); //For #3(2|3|4|5 & w'All of the Above')
      }
    } catch (err) {
    console.log(err);
    }
  };

  useEffect(() => {
    pickItem();
  }, []);

  return (
    <>
	<ul className='list-none flex justify-end items-start flex-1 flex-col text-start'>
            <li className='font-bold'>{item.title&&item.title}</li>
            {!item.free&&<>
            {item.a&&((swap==1 || (item.e && swap==4))?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:(((item.d && swap==2) || (item.e && swap==5))?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:((item.e && swap==6)?<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>:<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>)))}
            {item.b&&((swap==1 || (item.e && swap==4))?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:((item.e && swap==5)?<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>:(((item.e && swap==6) || (item.d && swap==3))?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>)))}
            {item.c&&(((item.d && swap==2) || (item.e && swap==5))?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:((item.e && swap==4)?<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>:(((item.e && swap==6) || (item.d && swap==3))?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>)))}
            {item.d&&((item.e && swap==4)?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:((item.e && swap==5)?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:((item.e && swap==6)?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>)))}
            {item.e&&<li><input type="radio" value="e" name="choice" /> {item.e}{values.choice==item.ans && item.ans=="e" &&"✔️"}</li>}
            </>}
            {item.free&&(!item.d)&&<>
            {item.a&&(swap==1?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:(swap==2?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>))}
            {item.b&&(swap==1?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:(swap==3?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>))}
            {item.c&&(swap==2?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:(swap==3?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>))}
            </>}
            {item.free&&item.d&&<>
            {item.a&&(swap==4?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:(swap==5?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:(swap==6?<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>:<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>)))}
            {item.b&&(swap==4?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:(swap==5?<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>:(swap==6?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>)))}
            {item.c&&(swap==4?<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>:(swap==5?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:(swap==6?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>)))}
            {item.d&&(swap==4?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:(swap==5?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:(swap==6?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>)))}
            </>}
	</ul>
    </>
  )
}

export default App;
