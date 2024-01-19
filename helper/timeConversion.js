import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

export function timeSince(createdAt) {
    const now = new Date();
    const differenceDays = differenceInDays(now, createdAt);
    const differenceHours = differenceInHours(now, createdAt);
    const differenceMinutes = differenceInMinutes(now, createdAt);
  
    if (differenceDays > 0) {
      return `${differenceDays} day${differenceDays === 1 ? '' : 's'} ago`;
    } else if (differenceHours > 0) {
      return `${differenceHours} hour${differenceHours === 1 ? '' : 's'} ago`;
    } else {
      return `${differenceMinutes} minute${differenceMinutes === 1 ? '' : 's'} ago`;
    }
  }

  export function memberSince (createdAt){
    const year = createdAt.getFullYear();
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const day = createdAt.getDate();

    // Formating the "member since" string
    const memberSince = `${month} ${day}, ${year}`;
    return memberSince
  }