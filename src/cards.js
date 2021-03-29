const randCards = (array) => {
  const arrayCopy = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[randomIndex];
    arrayCopy[randomIndex] = temp;
  }
  return arrayCopy;
};
const initialCards = () => {
  let id = 0;
  const cards = ["arg", "us", "spain", "uk", "it"].reduce((acc, country) => {
    acc.push({ id: id++, country });
    acc.push({ id: id++, country });
    return acc;
  }, []);
  return randCards(cards);
};

export default initialCards;
