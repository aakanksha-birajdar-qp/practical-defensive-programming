**Defensive Programming Concepts Covered**
- Defined Behavior
- Preconditions
- Undefined Behavior
- Fail Fast
- Retry Logic
- Transient Error
- Exponential Backoff
- Maximum Retry Count
- Throw Exception
- Neutral Value
- Log Messages
- External Intervention
- Centralized Error Handling

## **Project 1:  OTP Verification System**

### **Problem Statement**

A user wants to verify their mobile number. The system generates a One-Time Password (OTP), sends it through an SMS provider, and verifies the OTP entered by the user before successfully verifying the mobile number.

### **Defined Behavior**

* User enters a mobile number.
* System validates the mobile number.
* System generates a 6-digit OTP.
* System sends the OTP through an SMS provider.
* System stores the generated OTP temporarily.
* User enters the received OTP.
* System verifies the entered OTP against the stored OTP.
* User is successfully verified.

### **Preconditions**

* Mobile number must be provided.
* Mobile number format must be valid.
* User account must exist.
* OTP expiry time must be configured.
* SMS provider must be configured and available.

### **Undefined Behavior**

* OTP store contains corrupted data.
* SMS provider returns a malformed response.
* Unexpected OTP format is received.
* OTP data is missing or becomes inconsistent.
* OTP verification request contains unexpected or invalid data.

## **Project 2: Background Job Processing**

### **Problem Statement**

A user requests report generation. The system creates a background job, generates the report, stores the generated report, and returns the processing result while applying defensive programming techniques.

### **Defined Behavior**

* User requests report generation.
* System validates the request.
* System creates a background job.
* System generates the report.
* System saves the generated report.
* System marks the job as completed.
* System returns a successful response.

### **Preconditions**

* Report name must be provided.
* Job request must be valid.
* User must be authorized.
* Report generation service must be available.
* Storage location must be configured.

### **Undefined Behavior**

* Report data becomes corrupted.
* External PDF service returns a malformed response.
* Storage service returns an unexpected data type.
* Generated report file is missing after successful generation.
* Job metadata becomes corrupted.

---

## **Project 3: Authentication System**

### **Problem Statement**

A user wants to log in using an email and password. The system validates the user credentials and grants access to authorized users.

### **Defined Behavior**

* User enters email and password.
* System validates the input.
* System verifies that the user exists.
* System validates the password.
* System generates an authentication token.
* User is successfully authenticated.

### **Preconditions**

* Email must be provided.
* Password must be provided.
* Email format must be valid.
* User account must exist.
* Authentication service must be available.

### **Undefined Behavior**

* User data is corrupted.
* Invalid email data type is received.
* Password field is missing from the user record.
* Authentication service returns a malformed response.
* User record contains incomplete or inconsistent data.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
