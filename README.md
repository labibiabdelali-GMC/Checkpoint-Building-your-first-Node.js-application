# Building your first Node.js application

Simple exercises using built-in, local, and third-party modules in Node.js.

## Files

| File | Description |
| --- | --- |
| `message.txt` | Text file read in Task 1 |
| `readFile.js` | Task 1: reads `message.txt` with the built-in `fs` module |
| `reportGenerator.js` | Task 2: local module that exports `generateReport(name, scores)` |
| `main.js` | Task 2: uses the local module and prints the report |
| `emailSender.js` | Task 3: sends an email with `nodemailer` |

## How to run

### Task 1: built-in module (fs)

```bash
node readFile.js
```

Output:

```
Hello from the file system module!
```

### Task 2: local module

```bash
node main.js
```

Output:

```
Student: Ali
Scores: 12, 8, 15, 11
Average: 11.50
Status: Pass
```

### Task 3: third-party module (nodemailer)

1. Install the package:

   ```bash
   npm install
   ```

2. Open `emailSender.js` and replace `youremail@gmail.com`, `your-app-password`, and `receiver@example.com` with your own values.
   You need a Gmail [app password](https://myaccount.google.com/apppasswords) (2-Step Verification must be on).

3. Run:

   ```bash
   node emailSender.js
   ```
