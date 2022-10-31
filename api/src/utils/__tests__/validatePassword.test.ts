import validatePassword from "../validatePassword";

test('accept strong passwords', ()=>{
    expect(validatePassword("Abcd1234!@#$")).toBe(true);
    expect(validatePassword("DG@#%F342dsd")).toBe(true);
    expect(validatePassword("Th1sSh0|dB3Valid")).toBe(true);
})

test('reject weak passwords', ()=>{
    expect(validatePassword("Abc12!@")).toBe(false); // Less than 8 letters
    expect(validatePassword("abcd1234!@#$")).toBe(false); // No capital letters
    expect(validatePassword("ABCD1234!@#$")).toBe(false); // No small letters
    expect(validatePassword("ABCD!@#$")).toBe(false); // No numbers
    expect(validatePassword("ABCD1234")).toBe(false); // No special characters
})