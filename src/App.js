
function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture} alt={name}/>
    </div> 
  );
}
// const foodILike = [ {컴포넌트}, {컴포넌트}, ...]
const foodILike = [
  {
    id: 1,
    name: 'cat',
    image: 'https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'dog',
    image: 'https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'hamster',
    image: '',
    rating: 5,
  },
  {
    id: 4,
    name: 'rabbit',
    image:'',
    rating: 3.5,
  },
  {
    id: 5,
    name: 'panda',
    image: '',
    rating: 4.5,
  }
];

// App컴포넌트를 정의함
function App() {
  return ( // html반환
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
