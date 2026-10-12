import Button from '../Button'

const buttons = [
  {name: '+1', value: 1},
  {name: '+5', value: 5},
  {name: '+10', value: 10},
  {name: '-1', value: -1},
  {name: '-5', value: -5},
  {name: '-10', value: -10},
  {name: '초기화', value: 'init'},
];

function CounterViewer({handler}) {
  function countHandler(btn){
    if(btn.value === 'init'){
      handler({
        num: 0,
        last: null
      });
      return;
    }

    handler(old => ({
      num: old.num + btn.value,
      last: btn.name
    }));
  }
  
  return (
    <section className="flex items-center gap-2 justify-center">
      {buttons.map(b => <Button key={b.name} onClick={() => {countHandler(b)}}>{b.name}</Button>)}
    </section>
  )
}

export default CounterViewer
