const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const countdown = (seconds: number) => {
    const intervalId = setInterval(() => {
        if (seconds > 0) {
            console.log(`Time remaining: ${seconds} seconds`);
            seconds--;
        } else {
            console.log("Countdown complete!");
            clearInterval(intervalId);
            rl.close();
        }
    }, 1000);
};

const main = async () => {
    const durationStr = await askQuestion('Enter the countdown duration in seconds: ');
    const duration = parseInt(durationStr, 10);

    if (isNaN(duration) || duration <= 0) {
        console.log('Please enter a valid positive number for the duration.');
        rl.close();
        return;
    }

    countdown(duration);
};

main();
