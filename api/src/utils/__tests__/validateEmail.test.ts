import validateEmail from "../validateEmail";

test("accept valid emails", () => {
    expect(validateEmail("abc@abc.com")).toEqual(true);
});

test("reject invalid emails", () => {
    expect(validateEmail("@abc.com")).toEqual(false);
    expect(validateEmail("abc@.com")).toEqual(false);
    expect(validateEmail("abc@abc.")).toEqual(false);
    expect(validateEmail("abc@abc")).toEqual(false);
    expect(validateEmail("abc.com")).toEqual(false);
    expect(validateEmail("abc@abc")).toEqual(false);
    expect(validateEmail("abc")).toEqual(false);
});
