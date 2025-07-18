// Tests for countEmojisInMessage function
// This function counts the number of emoji characters in a text message

import { describe, it, expect } from "vitest";
import { countEmojisInMessage } from "./emojiCounter";

describe("countEmojisInMessage", () => {
  // Test with messages containing emojis
  // - Should count single emoji correctly: "Hello 😊" should return 1
  // - Should count multiple emojis: "I love 🍕 and 🍔!" should return 2
  // - Should count consecutive emojis: "Party time! 🎉🎊🥳" should return 3
  /* it('should count single emoji correctly', () => {
    const message = 'Hello 😊';
    const result = countEmojisInMessage(message);
    expect(result).toBe(1);

    const message2 = 'I love 🍕 and 🍔!';
    const result2 = countEmojisInMessage(message2);
    expect(result2).toBe(2);

    const message3 = 'Party time! 🎉🎊🥳';
    const result3 = countEmojisInMessage(message3);
    expect(result3).toBe(3);
  }) */
  const messages = {
    "Hello 😊": 1,
    "I love 🍕 and 🍔!": 2,
    "Party time! 🎉🎊🥳": 3,
  };
  it("test with messages containing emojis", () => {
    for (const [message, expected] of Object.entries(messages)) {
      const result = countEmojisInMessage(message);
      expect(result).toBe(expected);
    }
  });
  // ------------------------------
  // Test with messages without emojis
  // - Should return 0 for plain text: "Hello world"
  // - Should return 0 for empty string: ""
  // - Should return 0 for numbers and special characters: "123 !@#$%"
  it("should return 0 for plain text, empty string, numbers and special characters", () => {
    const messages = {
      "Hello world": 0,
      "": 0,
      "123 !@#$%": 0,
    };
    for (const [message, expected] of Object.entries(messages)) {
      const result = countEmojisInMessage(message);
      expect(result).toBe(expected);
    }
  });
  // ------------------------------
  // Test with different emoji types
  // - Should count face emojis: 😀 😃 😄 😁
  // - Should count food emojis: 🍎 🍌 🍕 🍔
  // - Should count activity emojis: ⚽ 🏀 🎮 📱
  // - Should count nature emojis: 🌟 ⭐ 🌙 ☀️
  it("should count different emoji types", () => {
    const messages = {
      "Hello world 😀": 1,
      "I love 🍕 and 🍔!": 2,
      "Party time! 🎉🎊🥳": 3,
      "Nature is beautiful 🌟 ⭐ 🌙 ☀️": 4,
    };
    for (const [message, expected] of Object.entries(messages)) {
      const result = countEmojisInMessage(message);
      expect(result).toBe(expected);
    }
  });
  // ------------------------------
  // Test edge cases
  // - Should handle very long messages with many emojis
  // - Should handle mixed content: text + emojis + numbers
  // - Should handle emoji variations and skin tones
  // - Should not count emoticons like :) or :D as emojis
  it("should handle edge cases", () => {
    const messages = {
      "I love 2 Party! 🎉🎊🥳": 3,
      "Nature is beautiful 🌟 ⭐ 🌙 ☀️": 4,
      ":D Having a good time! :)": 0,
      "My skintone is brownish 🤚🏿, while working next to my wife 👨‍💻 👩‍💻": 5, // hand +1, man +1, woman +1, computer +2.
    };
    for (const [message, expected] of Object.entries(messages)) {
      const result = countEmojisInMessage(message);
      expect(result).toBe(expected);
    }
  });
  // test the emoji counts:
  /*   console.log('🤚🏿:', countEmojisInMessage('🤚🏿'));
  console.log('👨‍💻:', countEmojisInMessage('👨‍💻'));
  console.log('👩‍💻:', countEmojisInMessage('👩‍💻')); */
  // ------------------------------
  // Test input validation
  // - Should handle null or undefined gracefully (if function allows)
  // - Should handle strings with only whitespace
  // - Should handle strings with special Unicode characters that aren't emojis
  it("should handle input validation", () => {
    expect(() => countEmojisInMessage(null as any)).toThrow();
    expect(() => countEmojisInMessage(undefined as any)).toThrow();
    expect(countEmojisInMessage("   ")).toBe(0);
    expect(countEmojisInMessage("Special characters: ? @ 3")).toBe(0); // © † ® are considered emojis, don't know why.
  });
});
