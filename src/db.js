// Storing activities as keys and an array of objects that indicate the date it was done and the elapsed time
export const logActivityDone = (activity, time) => {
  const activityLogs = localStorage.getItem(activity);
  const logEntry = { date: new Date(), elapsedTime: time };
  localStorage.setItem(
    activity,
    JSON.stringify(
      activityLogs
        ? activityLogs.concat([logEntry])
        : [logEntry]
    )
  );
};

export const getLogForActivity = (activity) => {
  return JSON.parse(localStorage.getItem(activity));
};

export const getAllLogs = () => {
  let archive = {},
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    archive[keys[i]] = JSON.parse(
      localStorage.getItem(keys[i])
    );
  }

  return archive;
};
