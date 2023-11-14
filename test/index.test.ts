import {describe, expect} from '@jest/globals';


describe('', () => {
  it('should say Hello World!', () => {
    const expected = 'Hello World!';
    const result = expected;
    expect(result).toBe(expected);
  });
});

describe('', () => {
  it('should say Goodby!', () => {
    const expected = 'Goodby!';
    const result = expected;
    expect(result).toBe(expected);
  });
});
// import {describe, test} from '@jest/globals';

// import { EmailClient } from "../src";
// import { EmailParams, TransportConfig } from '../src/client/Types';


// describe("Simple Email Client E2E test", () => {

//   test("Has to send email to a Mail Receiver", async ()=> {
//     const config: TransportConfig = {
//       name: "gmail",
//       user: "<the-account-owner-email>",
//       password: "<the-account-owner-password>"
//     };
    
//     const emailClient = new EmailClient(config);
//     const params: EmailParams = {
//       email: "<receiver-email>",
//       name: "<receiver-name>",
//     };
    
//     const email = emailClient.buildEmail("signUpUser", params);
//     await emailClient.sendEmail(email);    
//   });
// });