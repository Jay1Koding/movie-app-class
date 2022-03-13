import checkPropTypes from 'prop-types';

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{rating}</h4>
      <img width='300px' height='300px' src={image} alt={foodILike.name}></img>
    </div>
  );
}

const foodILike = [
  {
    rating: 5.0,
    name: 'kimchi1',
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgbc-cdn-public-media.azureedge.net%2Fimg64004.1426x713.jpg&f=1&nofb=1`,
  },
  {
    rating: 4.0,
    name: 'kimchi2',
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgbc-cdn-public-media.azureedge.net%2Fimg64004.1426x713.jpg&f=1&nofb=1`,
  },
  {
    rating: 5.1,
    name: 'kimchi3',
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgbc-cdn-public-media.azureedge.net%2Fimg64004.1426x713.jpg&f=1&nofb=1`,
  },
  {
    rating: 2.0,
    name: 'kimchi4',
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgbc-cdn-public-media.azureedge.net%2Fimg64004.1426x713.jpg&f=1&nofb=1`,
  },
  {
    rating: 4.0,
    name: 'kimchi5',
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgbc-cdn-public-media.azureedge.net%2Fimg64004.1426x713.jpg&f=1&nofb=1`,
  },
];

Food.propTypes = {
  name: checkPropTypes.string.isRequired,
  rating: checkPropTypes.number.isRequired,
  image: checkPropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish, index) => (
        <Food
          key={index}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
