const TOTAL_TIME_INVESTED = "TOTAL_TIME_INVESTED";
const ACTIVITY_PREFIX = "WAT-DO-";
// Storing activities as keys and an array of objects that indicate the date it was done and the elapsed time
export const logActivityDone = (activity, time) => {
  const activityLogs = localStorage.getItem(activity);
  const logEntry = { date: new Date(), elapsedTime: time };
  localStorage.setItem(
    ACTIVITY_PREFIX + activity,
    JSON.stringify(
      activityLogs
        ? activityLogs.concat([logEntry])
        : [logEntry]
    )
  );

  const totalTime = localStorage.getItem(
    TOTAL_TIME_INVESTED
  );
  let obj = { hours: 0, minutes: 0, seconds: 0 };
  if (totalTime) {
    obj = JSON.parse(totalTime);
  }
  obj.seconds += time.seconds;
  if (obj.seconds > 60) {
    obj.seconds -= 60;
    obj.minutes++;
  }
  obj.minutes += time.minutes;
  if (obj.minutes > 60) {
    obj.minutes -= 60;
    obj.hours++;
  }
  obj.hours += time.hours;
  localStorage.setItem(
    TOTAL_TIME_INVESTED,
    JSON.stringify(obj)
  );
};

export const getTotalTimeInvested = () => {
  return JSON.parse(
    localStorage.getItem(TOTAL_TIME_INVESTED)
  );
};

export const getAllLogs = () => {
  let archive = {},
    keys = Object.keys(localStorage).filter(
      (k) =>
        k !== TOTAL_TIME_INVESTED &&
        k.search(ACTIVITY_PREFIX) === 0
    ),
    i = keys.length;

  while (i--) {
    archive[keys[i].substr(ACTIVITY_PREFIX.length)] =
      JSON.parse(localStorage.getItem(keys[i]));
  }

  return archive;
};
