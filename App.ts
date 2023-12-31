import { useEffect, useState } from 'react';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './E';

function App() {

  const [item, setItem] = useState<any>([]);
  const [swap, setSwap] = useState(0); //For #0

  const pickItem = async() => {
    try {
      if (item.c&&(item.c=="all of the above.")) {
        setSwap(Math.floor(Math.random()*2)); //For #c w'all of the above'
      } else if (item.d&&(item.d!=="all of the above.")) {
        setSwap(Math.floor(Math.random()*(7-4+1)+4)); //For #d w/o'all of the above.'
      } else if (item.e&&(item.e!=="all of the above.")) {
        setSwap(Math.floor(Math.random()*7));; //For #d w'all of the above.'
      } else {
        setSwap(Math.floor(Math.random()*4)); //For #all(2|3|4)
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
	<ul>
            <li>{item.title&&item.title}</li>

            {item.b&&!item.c&&<>
            {item.a&&<A item={item} values={values}/>}
            {item.b&&<B item={item} values={values}/>}
            </>}

            {item.c&&(!item.d)&&(item.c!=="all of the above.")&&<>
            {item.a&&(swap==1?<B item={item} values={values}/>:(swap==2?<C item={item} values={values}/>:<A item={item} values={values}/>))}
            {item.b&&(swap==1?<A item={item} values={values}/>:(swap==3?<C item={item} values={values}/>:<B item={item} values={values}/>))}
            {item.c&&(swap==2?<A item={item} values={values}/>:(swap==3?<B item={item} values={values}/>:<C item={item} values={values}/>))}
            </>}

            {item.d&&(item.d!=="all of the above.")&&<>
            {item.a&&(swap==4?<B item={item} values={values}/>:(swap==5?<C item={item} values={values}/>:(swap==6?<D item={item} values={values}/>:<A item={item} values={values}/>)))}
            {item.b&&(swap==4?<A item={item} values={values}/>:(swap==5?<D item={item} values={values}/>:(swap==6?<C item={item} values={values}/>:<B item={item} values={values}/>)))}
            {item.c&&(swap==4?<D item={item} values={values}/>:(swap==5?<A item={item} values={values}/>:(swap==6?<B item={item} values={values}/>:<C item={item} values={values}/>)))}
            {item.d&&(swap==4?<C item={item} values={values}/>:(swap==5?<B item={item} values={values}/>:(swap==6?<A item={item} values={values}/>:<D item={item} values={values}/>)))}
            {item.e&&<E item={item} values={values}/>}
            </>}

            {(item.c=="all of the above."||item.d=="all of the above.")&&<>
            {item.a&&((swap==1 || (item.e && swap==4))?<B item={item} values={values}/>:(((item.d && swap==2) || (item.e && swap==5))?<C item={item} values={values}/>:((item.e && swap==6)?<D item={item} values={values}/>:<A item={item} values={values}/>)))}
            {item.b&&((swap==1 || (item.e && swap==4))?<A item={item} values={values}/>:((item.e && swap==5)?<D item={item} values={values}/>:(((item.e && swap==6) || (item.d && swap==3))?<C item={item} values={values}/>:<B item={item} values={values}/>)))}
            {item.c&&(((item.d && swap==2) || (item.e && swap==5))?<A item={item} values={values}/>:((item.e && swap==4)?<D item={item} values={values}/>:(((item.e && swap==6) || (item.d && swap==3))?<B item={item} values={values}/>:<C item={item} values={values}/>)))}
            {item.d&&((item.e && swap==4)?<C item={item} values={values}/>:((item.e && swap==5)?<B item={item} values={values}/>:((item.e && swap==6)?<A item={item} values={values}/>:<D item={item} values={values}/>)))}
            {item.e&&<E item={item} values={values}/>}
            </>}

	</ul>
    </>
  )
}

export default App;
