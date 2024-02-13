export function calculateRemainingTime(createdAt) {
    // Convert createdAt to a Date object
    const adCreatedAt = new Date(createdAt);

    // Define the duration for the timer in milliseconds
    const timerDuration = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    // Calculate the end date of the timer
    const endDate = new Date(adCreatedAt.getTime() + timerDuration);

    // Get the current date
    const currentDate = new Date();

    // Calculate the remaining time for the timer in milliseconds
    const remainingTime = endDate.getTime() - currentDate.getTime();

    // If the remaining time is positive, the timer is still ongoing
    if (remainingTime > 0) {
        // Convert remainingTime to days
        const remainingDays = Math.ceil(remainingTime / (24 * 60 * 60 * 1000));
        return remainingDays;
    } else {
        return "Timer has ended.";
    }
}


