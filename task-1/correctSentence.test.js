import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("")).toBe(".")
  expect(correctSentence(".")).toBe(".")
  expect(correctSentence(",")).toBe(",.")
  expect(correctSentence("hi")).toBe("Hi.")
  expect(correctSentence("hi -_- HUMAN")).toBe("Hi -_- HUMAN.")
  expect(correctSentence("1024")).toBe("1024.")
  expect(correctSentence(123)).toBe(123)
})
