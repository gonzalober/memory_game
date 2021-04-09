const initialCards = require("../cards");
//import initialCards from "../cards";

describe("cards", function () {
  it("must return array", () => {
    expect(initialCards()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 8,
        }),
      ])
    );
  });
  it("flags id", () => {
    initialCards().forEach((idNumber) => {
      expect(idNumber).toMatchSnapshot({
        id: expect.any(Number),
      });
    });
  });
  it("flags country", () => {
    initialCards().forEach((coutryFlag) => {
      expect(coutryFlag).toMatchSnapshot({
        country: expect.any(String),
      });
    });
  });
});
