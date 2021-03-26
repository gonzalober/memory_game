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
  const cards = ["arg", "us", "spain", "uk"].reduce((acc, type) => {
    acc.push({ id: id++, type });
    acc.push({ id: id++, type });
    return acc;
  }, []);
  return randCards(cards);
};

export default initialCards;
